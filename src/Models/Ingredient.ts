import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, ManyToMany} from "typeorm";
import { Product } from "./Product";

@Entity()
export class Ingredient extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ type: "float" })
    price: number;

    @Column()
    quantity: number;

    @Column()
    type: string;

    @Column()
    requested: boolean;
    
    @ManyToMany(type => Product, product => product.id)
    products: Product[];
}