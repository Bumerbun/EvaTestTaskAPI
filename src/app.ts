import { Request, Response, NextFunction } from "express";
import channels from './routes/channels/routes'
import channelMessages from './routes/channelMessages/routes'

const express = require('express')
const app = express();

//const indexRoutes = require('./routes/index')

app.use(express.json())
app.use(function(_req: Request, res: Response, next: NextFunction) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use("/", channels)
app.use("/", channelMessages)

export default app;