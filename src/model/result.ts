import { User } from "./user";

export class AnswerInfo {
  public questionId: number;
  public guess: number;
  public answer: number;
  public time: Date;
}

export class UserAnswerInfo {
  public userName: string = "";
  public score: number = 0;
  public answerList: AnswerInfo[] = [];

  add(inUserName: string, inAnswerInfo: AnswerInfo): boolean {
    let isFound: boolean = false;

    if (this.userName != inUserName) {
      return isFound;
    }

    if (!this.answerList) {
      this.answerList = [];
    }

    for (let i = 0; i < this.answerList.length; ++i) {
      let eachAnswerInfo = this.answerList[i];
      if (inAnswerInfo.questionId == eachAnswerInfo.questionId) {
        isFound = true;
        break;
      }
    }

    if (!isFound) {
      this.answerList.push(inAnswerInfo);
      console.log (`answer: ${inAnswerInfo.answer} guess: ${inAnswerInfo.guess}`);
      if (inAnswerInfo.answer == inAnswerInfo.guess) {
        ++this.score;
      }
    }

    return !isFound; // Not found hence added
  }
}

export class UserResultInfo {
  public userAnswerInfoList: UserAnswerInfo[];

  public add(
    inUserName: string,
    inQuestionId: number,
    inGuess: number,
    inAnswer: number
  ): boolean {
    let answerInfo: AnswerInfo = new AnswerInfo();
    answerInfo.questionId = inQuestionId;
    answerInfo.guess = inGuess;
    answerInfo.answer = inAnswer;
    answerInfo.time = new Date();

    let retValue: boolean = false;
    let isFound: boolean = false;

    if (!this.userAnswerInfoList) {
      this.userAnswerInfoList = [];
    }

    for (let i = 0; i < this.userAnswerInfoList.length; ++i) {
      let eachUserAnswerInfo = this.userAnswerInfoList[i];
      if (eachUserAnswerInfo.userName == inUserName) {
        let foundUserAnswerInfo = this.userAnswerInfoList[i];
        retValue = foundUserAnswerInfo.add(inUserName, answerInfo);
        isFound = true;
        break;
      }
    }

    if (!isFound) {
      let userAnswerInfo: UserAnswerInfo = new UserAnswerInfo();
      userAnswerInfo.userName = inUserName;
      retValue = userAnswerInfo.add(inUserName, answerInfo);
      this.userAnswerInfoList.push(userAnswerInfo);
    }

    return retValue;
  }

  getResult() {
    let resultList = [];

    if (this.userAnswerInfoList) {
      for (let i = 0; i < this.userAnswerInfoList.length; ++i) {
        let eachUserAnswerInfo = this.userAnswerInfoList[i];
        resultList.push({
          name: eachUserAnswerInfo.userName,
          score: isNaN(eachUserAnswerInfo.score) ? 0 : eachUserAnswerInfo.score
        });
      }
    }

    return resultList;
  }

  clear () {
    this.userAnswerInfoList = [];
  }
}
