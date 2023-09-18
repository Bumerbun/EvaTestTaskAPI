import {Router, Request, Response} from "express"
import AppDataSource from "../../data-source"
import {Channel} from '../../entity/Channel' 

const router = Router();

router.get('/channel', async (req, res) => {
    const data = await AppDataSource.getRepository(Channel)
        .createQueryBuilder("channel")
        .getMany()
    res.json(data) 
})
router.post('/channel', async (req, res) => {
    try {
        await AppDataSource.getRepository(Channel).upsert(req.body, ['name'])
    }
    catch (error){
        res.status(400).json({message: "invalid data"})
    }
    res.sendStatus(200)
})

export default router