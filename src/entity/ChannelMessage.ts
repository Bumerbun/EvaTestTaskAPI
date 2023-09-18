import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { AnswerButton } from "./AnswerButton";
import { Channel } from "./Channel";
import { KeyboardType } from "./KeyboardType";

@Entity()
export class ChannelMessage{
    @PrimaryGeneratedColumn()
    id: number;

    @Column("text", {nullable: false})
    text: string;

    @ManyToOne(() => Channel, (channel) => channel.id, {nullable: false})
    channel: Channel;

    @ManyToOne(() => KeyboardType, (type) => type.id, {nullable: true})
    keyboardType: KeyboardType

    @OneToMany(() => AnswerButton, (answerb) => answerb.message)
    answerButtons: AnswerButton[];
    
}