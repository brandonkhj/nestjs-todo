import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todos } from './todos.entity';

@Injectable()
export class TodosService {
    constructor(@InjectRepository(Todos) private repo: Repository<Todos>) { }

    create(body: any) {
        const todo = this.repo.create(body);
        return this.repo.save(todo);
    }

    find() {
        return this.repo.find();
    }

    findOne(id: number) {
        if (!id) return null;
        return this.repo.findOne(id);
    }

    async update(id: number) {
        const todo = await this.repo.findOne(id);
        if (!todo) {
            throw new NotFoundException(`Todo with id ${id} not found`);
        };
        return this.repo.save({ ...todo, isCompleted: true });
    }

    async delete(id: number) {
        const todo = await this.repo.findOne(id);
        if (!todo) {
            throw new NotFoundException(`Todo with id ${id} not found`);
        };
        return this.repo.softRemove(todo);
    }

}
