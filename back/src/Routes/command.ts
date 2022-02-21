import express from 'express';
import { Command } from "../Models/Command";
import { checkAdmin, checkAdminKitchen, checkCustomer, checkKitchen } from "../Middlewares/checkRole";
import { Product } from '../Models/Product';
import { In } from 'typeorm'
import { Ingredient} from "../Models/Ingredient"

let router = express.Router()

router.post('/commands', checkCustomer, async (req, res) => {
    /*
    let today = new Date()
    let command = new Command()
    command.status = "non-traitée"
    command.createdAt = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    */

    let command = new Command()
    command.status = "non-traitée"
    command.createdAt = new Date();

    let products = await Product.find({relations: ["ingredients"], where: { id: In(req.body.products) }})
    command.products = products

    const newquantityingredient = command.products.map( product => {
        product.ingredients.map( ingredient => {
            ingredient.quantity = ingredient.quantity - 1
            ingredient.save()
        })
        }
    )

    let result = await Command.save(command);
    return res.send(result);

});


router.get('/commands', checkAdminKitchen, async (req, res) => {

    let command = await Command.find({ 
        relations: ["products", "products.ingredients"], 
        where: { status : "non-traitée" }, 
        order: { createdAt: "ASC"} 
    })
    res.json({status : 200, data: {command}})

});

router.get('/commands/:id', checkKitchen, async (req, res) => {

    let command = await Command.findOne({
        relations: ["products", "products.ingredients"], 
        where: { id: req.params.id }
    })
    res.json({status : 200, data: {command}})
});

router.put('/commands/:id', checkKitchen, async (req, res) => {

    let command = await Command.findOne({relations: ["products"], where: {
        id: req.params.id
    }})

    command.status = 'terminée'
    command.finishedAt = new Date()

    await command.save()
    res.json({status : 200, data: {command}})

});

router.delete('/commands/:id', async (req, res) => {

    let command = await Command.findOne({relations: ["products"], where: {
        id: req.params.id
    }})

    await Command.delete({
        id: command.id,
        });
    res.json({status : 200, data: "Commande supprimée !"})

});
export default router