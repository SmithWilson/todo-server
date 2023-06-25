import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { CardStatusEnum } from "src/models/main-drag-drop.enum";
import { Assignment } from "src/models/project-card.model";

export type TodoDocument = HydratedDocument<Todo>;

@Schema()
export class Todo {
  @Prop()
  name: string;

  @Prop()
  status: CardStatusEnum;

  @Prop()
  todoCode: string;

  @Prop()
  tags: string[];

  @Prop()
  description: string;

  @Prop()
  dateFrom: Date | null;

  @Prop()
  dateTo: Date | null;

  @Prop()
  imgUrl: string;

  @Prop()
  comments: Comment[];

  @Prop()
  assignments: Assignment[];

  @Prop()
  priority: string;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);