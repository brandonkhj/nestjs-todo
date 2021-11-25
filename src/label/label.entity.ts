import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, DeleteDateColumn, ManyToMany, JoinTable } from "typeorm";
import { Transform } from "class-transformer";
import { Todos } from "src/todos/todos.entity";

@Entity()
export class Label {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    label: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn({ select: false })
    deletedAt: Date;

    @ManyToMany(() => Todos, todos => todos.labels)
    @JoinTable()
    todos: Todos[];
}