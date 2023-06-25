import { Module } from '@nestjs/common';
import { TodoController } from './controllers/todo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TodosModule } from './schemas/modules/todo.module';
import { TodoService } from './services/todo.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/local'),
    TodosModule
  ],
  controllers: [
  ],
  providers: [
  ],
})
export class AppModule {}
