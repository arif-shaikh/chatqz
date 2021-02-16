import { Message, MessageType, User } from "./";

export class ChatMessage extends Message {
  constructor(
    public from: User,
    public content: any,
    public type: MessageType = MessageType.Normal
  ) {
    super(from, content, type);
  }
}
