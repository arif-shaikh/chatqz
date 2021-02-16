export class Question {
  constructor(
    public Id: number,
    public question: string,
    public optionList: string[],
    public answer: number
  ) {}
}
