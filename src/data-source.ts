import "reflect-metadata";
import { DataSource } from "typeorm";
import { AnswerButton } from "./entity/AnswerButton";
import { Channel } from "./entity/Channel";
import { ChannelMessage } from "./entity/ChannelMessage";
import { KeyboardType } from "./entity/KeyboardType";

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "main",
    password: "",
    database: "TestTaskEVAdb",
    entities: [AnswerButton, Channel, ChannelMessage, KeyboardType],
    synchronize: true
  })
AppDataSource.initialize()
  .then(async () => {
    console.log("Connection initialized with database");
  })
  .catch((error) => console.log(error));

export default AppDataSource