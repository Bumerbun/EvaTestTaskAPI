import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Channel{
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text', {nullable: false, unique:true})
    name: string
}