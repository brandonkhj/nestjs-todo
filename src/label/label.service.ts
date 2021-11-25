import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Label } from './label.entity';

@Injectable()
export class LabelService {
    constructor(@InjectRepository(Label) private repo: Repository<Label>) { }

    create(body: any) {
        const label = this.repo.create(body);
        return this.repo.save(label);
    }

    find() {
        return this.repo.find({ relations: ['todos'] });
    }

    findOne(id: number) {
        if (!id) return null;
        return this.repo.findOne(id, { relations: ['todos'] });
    }

    async update(id: number) {
        const label = await this.repo.findOne(id);
        if (!label) {
            throw new NotFoundException(`Todo with id ${id} not found`);
        };
        return this.repo.save(label);
    }

    async delete(id: number) {
        const label = await this.repo.findOne(id);
        if (!label) {
            throw new NotFoundException(`Todo with id ${id} not found`);
        };
        return this.repo.softRemove(label);
    }
}
