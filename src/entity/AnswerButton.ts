import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ChannelMessage } from "./ChannelMessage";

@Entity()
export class AnswerButton{
    @PrimaryGeneratedColumn()
    id: number;
    
    @ManyToOne(() => ChannelMessage, (message) => message.id, {nullable:false})
    @JoinColumn()
    message: ChannelMessage;

    @Column("text", {nullable: false})
    text: string;

    @Column("text", {nullable: true})
    link: string | null;
}