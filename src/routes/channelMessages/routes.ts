import {Router, Request, Response} from "express"
import AppDataSource from "../../data-source"
import {ChannelMessage} from '../../entity/ChannelMessage' 
import { AnswerButton } from "../../entity/AnswerButton";

const router = Router();

router.get('/channelMessages', async (req, res) => {
    const data = AppDataSource.getRepository(ChannelMessage)
        .createQueryBuilder("channel")
        .getMany()
    res.json(data) 
})
router.post('/channelMessages', async (req, res) => {
    console.log(req.body)
    var result;
    try {
        result = (await AppDataSource.createQueryBuilder().insert().into(ChannelMessage).values(req.body).returning('id').execute()).raw
    }
    catch (error){
        console.log(error)
        res.status(400).json({message: "invalid data channel message data"})
        return
    }
    console.log(req.body.answerButtons)
    if (!req.body.answerButtons){
        console.log(2222)
        res.sendStatus(200)
        return
        
    }
    try {
        console.log('why')
        for (var i = 0; i < req.body.answerButtons.length; i++){
            const body = req.body.answerButtons[i]
            body.message = result[0].id
            await AppDataSource.createQueryBuilder().insert().into(AnswerButton).values(body).execute()
        }
        res.sendStatus(200)
        return
    }
    catch (error){
        console.log(error)
        res.status(400).json({message: "invalid data channel message data"})
        return
    }
})

export default router