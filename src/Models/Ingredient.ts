import { BaseEntity, Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Ingredient extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    type: string;

    @Column({nullable: true})
    tag: string;

    @Column()
    price: number;

    @Column()
    quantity: number;
    
}