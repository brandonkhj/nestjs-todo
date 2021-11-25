import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, DeleteDateColumn, ManyToMany, JoinTable } from "typeorm";
import { Label } from "src/label/label.entity";

@Entity()
export class Todos {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    todo: string;

    @Column()
    description: string;

    @Column({ default: false })
    isCompleted: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn({ select: false })
    deletedAt: Date;

    @ManyToMany(() => Label, label => label.todos)
    @JoinTable()
    labels: Label[];
}