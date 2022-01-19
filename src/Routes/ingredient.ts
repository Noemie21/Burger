import express from 'express';
import { User } from "../Models/User";
import { Ingredient} from "../Models/Ingredient"
import { URLSearchParams } from 'url';

let router = express.Router()

router.post('/ingredients', async (req, res) => {
    let user = await User.findOne({where: { 
        // @ts-ignore
        id: req.user.id 
    }})
    if (user.role != 'admin') {
        res.json({status : 403, data: "Vous n'avez pas l'autorisation"})
    }
    else {
    let ingredient = await Ingredient.create(req.body);
    let result = await Ingredient.save(ingredient);
    return res.send(result);
    }
});

router.get('/ingredients', async (req, res) => {
    let user = await User.findOne({where: { 
        // @ts-ignore
        id: req.user.id 
    }})
    if (user.role != 'admin') {
        res.json({status : 403, data: "Vous n'avez pas l'autorisation"})
    }
    else {
        let ingredient = await Ingredient.find()
        res.json({status : 200, data: {ingredient}})
    }
});

router.get('/ingredients/:id', async (req, res) => {
    let user = await User.findOne({where: { 
        // @ts-ignore
        id: req.user.id 
    }})
    if (user.role != 'admin') {
        res.json({status : 403, data: "Vous n'avez pas l'autorisation"})
    }
    else {
        let ingredient = await Ingredient.findOne({where: {
            id: req.params.id
        }})
        res.json({status : 200, data: {ingredient}})
    }
});

router.put('/ingredients/:id', async (req, res) => {
    let user = await User.findOne({where: { 
        // @ts-ignore
        id: req.user.id
    }})
    if (user.role != 'admin') {
        res.json({status : 403, data: "Vous n'avez pas l'autorisation"})
    }
    else {
        let ingredient = await Ingredient.findOne({where: {
            id: req.params.id
        }})
        let updatedIngredient = await Ingredient.update({
            id: ingredient.id,
          }, {
            price: req.body.price,
            quantity: req.body.quantity,
            type: req.body.type,
            requested: req.body.requested
        });
        res.json({status : 200, data: {updatedIngredient}})
    }
});

router.post('/ingredients', async (req, res) => {
    let user = await User.findOne({where: { 
        // @ts-ignore
        id: req.user.id 
    }})
    if (user.role != 'admin') {
        res.json({status : 403, data: "Vous n'avez pas l'autorisation"})
    }
    else {
    let ingredient = await Ingredient.create(req.body);
    let result = await Ingredient.save(ingredient);
    return res.send(result);
    }
});

router.delete('/ingredients/:id', async (req, res) => {
    let user = await User.findOne({where: { 
        // @ts-ignore
        id: req.user.id 
    }})
    if (user.role != 'admin') {
        res.json({status : 403, data: "Vous n'avez pas l'autorisation"})
    }
    else {
        let ingredient = await Ingredient.findOne({where: {
            id: req.params.id
        }})
        let updatedIngredient = await Ingredient.delete({
            id: ingredient.id,
          });
        res.json({status : 200, data: "Ingrédient supprimé !"})
    }
});

export default router