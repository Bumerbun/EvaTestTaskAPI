import {Router, Request, Response} from "express"

const channels = require("./channels/routes.ts");  
const channelMessages = require("./channelMessages/routes.ts")

const router = Router();

router.use("/", (req: Request, res: Response) => {
    res.send("A")
})
router.use(channels)
router.use(channelMessages)

export default router

