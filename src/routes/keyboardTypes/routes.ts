import {Router, Request, Response} from "express"
import AppDataSource from "../../data-source" 
import { KeyboardType } from "../../entity/KeyboardType";

const router = Router();

router.get('/keyboardType', async (req, res) => {
    const data = await AppDataSource.getRepository(KeyboardType)
        .createQueryBuilder("keyboardType")
        .getMany()
    res.json(data) 
})
router.post('/keyboardType', async (req, res) => {
    try {
        await AppDataSource.getRepository(KeyboardType).upsert(req.body, ['name'])
    }
    catch (error){
        res.status(400).json({message: "invalid data"})
    }
    res.sendStatus(200)
})

export default router