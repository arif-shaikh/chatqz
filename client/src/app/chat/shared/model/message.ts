import { User } from "./user";
import { Action } from "./action";

export enum MessageType {
  Normal,
  Question,
  Answer,
  Result
}

export interface Message {
  from?: User;
  content?: any;
  type?: MessageType;
  action?: Action;
}

export interface Question {
  Id: number;
  question: string;
  optionList: string[];
  answer: number;
}

export interface AnswerInfo {
  questionId: number;
  guess: number;
  answer: number;
  time: Date;
}
