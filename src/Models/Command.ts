import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, OneToMany  } from "typeorm";
import { Product } from './Product';

@Entity()
export class Command extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    status: string;

    @Column()
    createdAt: Date;

    @OneToMany(() => Product, product => product.id)
    products: Product[];
}