import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { LabelService } from './label.service';

@Controller('label')
export class LabelController {
    constructor(private labelService: LabelService) { }
    @Post()
    createTodo(@Body() body: any) {
        console.log('Create LABEL', body);
        return this.labelService.create(body);
    }

    @Get()
    findTodos() {
        console.log('Get all labels');
        return this.labelService.find();
    }

    @Get(':id')
    findTodoById(@Param('id') id: string) {
        console.log(`Get LABEL by Id ${id}`);
        return this.labelService.findOne(parseInt(id));

    }

    @Patch(':id')
    updateTodoStatus(@Param('id') id: string) {
        console.log(`Update LABEL by Id ${id}`);
        return this.labelService.update(parseInt(id));
    }

    @Delete(':id')
    deleteTodo(@Param('id') id: string) {
        console.log(`Delete LABEL by Id ${id}`);
        return this.labelService.delete(parseInt(id));
    }
}
