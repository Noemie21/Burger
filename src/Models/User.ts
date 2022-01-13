import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, OneToMany  } from "typeorm";
import { Command } from './Command';

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @OneToMany(() => Command, command => command.id)
    commands: Command[];
}