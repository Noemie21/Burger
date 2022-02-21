import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from "typeorm";
import { Ingredient } from './Ingredient';

@Entity()
export class Product extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ type: "float" })
    price: number;

    @ManyToMany(() => Ingredient, ingredient => ingredient.id)
    @JoinTable()
    ingredients: Ingredient[];
}