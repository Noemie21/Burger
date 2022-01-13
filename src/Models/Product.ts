import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, OneToMany  } from "typeorm";
import { Ingredient } from './Ingredient';

@Entity()
export class Product extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    price: number;

    @OneToMany(() => Ingredient, ingredient => ingredient.id)
    ingredients: Ingredient[];
}