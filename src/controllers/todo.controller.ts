import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, Query, Res } from '@nestjs/common';
import { CardDto } from 'src/models/project-card.model';
import { TodoService } from 'src/services/todo.service';
import { Response } from 'express';

@Controller('api/todos')
export class TodoController {
  constructor(
    private readonly service: TodoService) {}

  @Get()
  async getAll() {
    return this.service.getAll();
  }

  @Get('/:id')
  async getById(@Param('id') id) : Promise<CardDto> {
    return this.service.getById(id);
  }

  @Post()
  async add(
    @Body() cardDto: CardDto,
    @Res() response: Response): Promise<void>{
    try {
      this.service.add(cardDto);
  
      response.status(HttpStatus.CREATED).send();
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: error
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Put()
  async update(
    @Body() cardDto: CardDto,
    @Res() response: Response): Promise<void>{
    try {
      if (cardDto == null || cardDto.id == null) {
        response.status(HttpStatus.NOT_FOUND).send();
      }

      let todo = await this.service.update(cardDto);
  
      response.status(HttpStatus.OK).json(todo);
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: error
      }, HttpStatus.NOT_FOUND);
    }
  }

  @Delete()
  async delete(
    @Query('id') id,
    @Res() response: Response): Promise<void> {
    try {
      this.service.delete(id);
  
      response.status(HttpStatus.OK).send();
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: error
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

}