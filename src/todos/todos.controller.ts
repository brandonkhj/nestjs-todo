import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
    constructor(private todoService: TodosService) { }
    @Post()
    createTodo(@Body() body: any) {
        console.log('Create TODO', body);
        return this.todoService.create(body);
    }

    @Get()
    findTodos() {
        console.log('Get all todos');
        return this.todoService.find();
    }

    @Get(':id')
    findTodoById(@Param('id') id: string) {
        console.log(`Get TODO by Id ${id}`);
        return this.todoService.findOne(parseInt(id));
    }

    @Patch(':id')
    updateTodoStatus(@Param('id') id: string) {
        console.log(`Update TODO by Id ${id}`);
        return this.todoService.update(parseInt(id));
    }

    @Delete(':id')
    deleteTodo(@Param('id') id: string) {
        console.log(`Delete TODO by Id ${id}`);
        return this.todoService.delete(parseInt(id));
    }
}
