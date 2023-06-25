import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Todo, TodoSchema } from "../todo-card.schema";
import { TodoController } from "src/controllers/todo.controller";
import { TodoService } from "src/services/todo.service";

@Module({
    imports: [MongooseModule.forFeature([
      { 
        name: Todo.name,
        schema: TodoSchema
      }])],
    controllers: [TodoController],
    providers: [TodoService],
  })
  export class TodosModule {}