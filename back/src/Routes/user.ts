import express from 'express';
import { User } from "../Models/User";

let router = express.Router()

router.get('/users/me', async (req, res) => {
    let user = await User.findOne({where: { 
        // @ts-ignore
        id: req.user.id 
    }})
    let name = user.username

    res.json({status : 200, data: user})
})

export default router