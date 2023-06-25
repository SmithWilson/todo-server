import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CardStatusEnum } from 'src/models/main-drag-drop.enum';
import { CardDto } from 'src/models/project-card.model';
import { Todo, TodoDocument } from 'src/schemas/todo-card.schema';
import * as crypto from 'crypto';
import { groupBy, groupByES6 } from 'src/utils/util';

@Injectable()
export class TodoService {
    constructor(
        @InjectModel(Todo.name) private readonly todoModel: Model<Todo>
    ) { }

    async getAll(){
        try {
            let todos = await this.todoModel.find().exec();
            let todosGroupByStatus = groupByES6(todos.map(x => new CardDto(x)), 'statusName');
            return todosGroupByStatus;
        } catch (error) {
            console.error(`ERROR!`, error);
            throw error;
        }
    }

    async getById(id: string){
        try {
            let todo = await this.todoModel.findById(id).exec();
            console.log(todo);

            return new CardDto(todo);
        } catch (error) {
            console.error(`ERROR!`, error);
            throw error;
        }
    }

    async delete(id: string){
        try {
            await this.todoModel.deleteOne({id});
        } catch (error) {
            console.error(`ERROR!`, error);
            throw error;
        }
    }

    async add(cardDto: CardDto){
        try {
            let todo = new this.todoModel({
                assignments: cardDto.assignments,
                comments: cardDto.comments,
                dateFrom: cardDto.dateFrom,
                dateTo: cardDto.dateTo,
                description: cardDto.description,
                imgUrl: cardDto.imgUrl,
                priority: cardDto.priority,
                tags: cardDto.tags,
                todoCode: cardDto.todoCode,
                name: cardDto.name,
                status: cardDto.status,
            });
            todo.save();
        } catch (error) {
            console.error(`ERROR!`, error);
            throw error;
        }
    }

    async update(cardDto: CardDto){
        try {
            let todo = this.todoModel.findByIdAndUpdate({ _id: cardDto.id }, cardDto);

            return todo;
        } catch (error) {
            console.error(`ERROR!`, error);
            throw error;
        }
    }
}