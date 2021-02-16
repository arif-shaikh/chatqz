import express from "express";
import cors from "cors";
import * as http from "http";
import {
  Message,
  MessageType,
  ChatMessage,
  Question,
  UserResultInfo
} from "./model";
import {QuestionList} from './question-list';
import {IQuestion} from './question/questionCollection';

enum tagMode {
  normal,
  question
}

export class ChatServer {
  public static readonly PORT: number = 8080;
  private app: express.Application;
  private server: http.Server;
  private io: SocketIO.Server;
  private port: string | number;

  private questionList: QuestionList = new QuestionList();
  private userResultInfo: UserResultInfo = new UserResultInfo();

  private currentMode: tagMode = tagMode.normal;

  constructor() {
    this.createApp();
    this.config();
    this.createServer();
    this.sockets();
    this.listen();
  }

  private createApp(): void {
    this.app = express();
    this.app.use(cors());
    this.app.use(express.static('public'));
  }

  private createServer(): void {
    this.server = http.createServer(this.app);
  }

  private config(): void {
    this.port = process.env.PORT || ChatServer.PORT;
  }

  private sockets(): void {
    this.io = require("socket.io").listen(this.server, { origins: "*:*" });
  }

  private listen(): void {
    this.server.listen(this.port, () => {
      console.log("Running server on port %s", this.port);
    });

    this.io.on("connect", (socket: any) => {
      console.log("Connected client on port %s.", this.port);
      socket.on("message", (msg: Message) => {
        console.log("Current Mode ==> ", this.currentMode);
        msg.type = MessageType.Normal;

        if (msg.from.name.toLowerCase() == "zycos") {
          msg = this.processAdminRequest(msg);
        } else if (this.currentMode == tagMode.question) {
          msg = this.processAnswerRequest(msg);
        }

        console.log("[server](message): %s", JSON.stringify(msg));
        this.io.emit("message", msg);
      });

      socket.on("disconnect", () => {
        console.log("Client disconnected");
      });
    });
  }

  private processAnswerRequest(msg: ChatMessage): ChatMessage {
    let guess = parseInt(msg.content);

    if (this.currentMode == tagMode.question && !isNaN(guess)) {
      let currentQuestion = this.questionList.getCurrent();

      let userName: string = msg.from.name;
      let questionId: number = currentQuestion.Id;
      let guessAnswer: number = guess;
      let answer: number = currentQuestion.answer;

      this.userResultInfo.add(userName, questionId, guessAnswer, answer);
    }

    return msg;
  }

  private processAdminRequest(msg: ChatMessage): ChatMessage {
    if (msg.from.name.toLowerCase() == "zycos") {
      msg.from.name = "admin";

      if (msg.content) {
        if (this.currentMode == tagMode.normal && 
            msg.content.toLowerCase() == "q") {
          let currentQuestion: IQuestion = this.questionList.getCurrent();
          msg.type = MessageType.Question;
          msg.content = currentQuestion;

          this.currentMode = tagMode.question;
        } else if (this.currentMode == tagMode.question &&
          msg.content.toLowerCase() == "a") {
          let currentQuestion: IQuestion = this.questionList.getCurrent();
          msg.type = MessageType.Answer;
          msg.content = { 
            question: currentQuestion.question,
            answer: currentQuestion.optionList[currentQuestion.answer-1] 
          };

          this.questionList.moveToNext ();
          this.currentMode = tagMode.normal;
        } else if (msg.content.toLowerCase() == "r") {
          msg.content = this.userResultInfo.getResult();
          msg.type = MessageType.Result;
        } else if (msg.content.toLowerCase() == "p") {
          this.questionList.restartCurrent();
          this.userResultInfo.clear();
        }
      }
    }

    return msg;
  }

  public getApp(): express.Application {
    return this.app;
  }
}

let app = new ChatServer();
