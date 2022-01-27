import express from 'express';
import { User } from "../Models/User";
import { Command } from "../Models/Command";
import { checkAdmin, checkAdminKitchen, checkCustomer, checkKitchen } from "../Middlewares/checkRole";
import { Product } from '../Models/Product';
import { In } from 'typeorm'

let router = express.Router()

router.get('/users/me', async (req, res) => {
    let user = await User.findOne({where: { 
        // @ts-ignore
        id: req.user.id 
    }})
    let name = user.username

    res.json({status : 200, data: {name}})
})

export default router