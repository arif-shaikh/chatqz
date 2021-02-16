import { User } from "./user";

export enum MessageType {
  Normal,
  Question,
  Answer,
  Result
}
export class Message {
  constructor(
    public from: User,
    public content: string,
    public type: MessageType = MessageType.Normal
  ) {}
}
