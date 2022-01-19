import { BaseEntity, Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Ingredient extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    price: number;

    @Column()
    quantity: number;

    @Column()
    type: string;

    @Column()
    requested: boolean; 
}