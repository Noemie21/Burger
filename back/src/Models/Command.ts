import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable  } from "typeorm";
import { Product } from './Product';
import { Ingredient } from './Ingredient';

@Entity()
export class Command extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    status: string;

    @Column()
    createdAt: Date;

    @Column({ nullable: true })
    finishedAt: Date;

    @ManyToMany(() => Product, product => product.id)
    @JoinTable()
    products: Product[];

    @ManyToMany(() => Ingredient, ingredient => ingredient.id)
    @JoinTable()
    ingredients: Ingredient[];
}