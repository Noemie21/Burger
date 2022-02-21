import express from 'express';
import { Product } from "../Models/Product"
import { checkAdmin } from "../Middlewares/checkRole";
import { Ingredient } from '../Models/Ingredient';
import { In } from 'typeorm'

let router = express.Router()


router.post('/products', checkAdmin, async (req, res) => {

    let product = new Product()
    product.name = req.body.name;
    product.price = req.body.price;

    let ingredients = await Ingredient.find({where: { id: In(req.body.ingredients) }})
    product.ingredients = ingredients

    let result = await Product.save(product);
    return res.send(result);

});

router.get('/products', checkAdmin, async (req, res) => {

    let product = await Product.find({ relations: ["ingredients"] })
    res.json({status : 200, data: {product}})

});

router.get('/products/:id', checkAdmin, async (req, res) => {

    let product = await Product.findOne({relations: ["ingredients"], where: {
        id: req.params.id
    }})
    res.json({status : 200, data: {product}})
});

router.put('/products/:id', checkAdmin, async (req, res) => {

    let product = await Product.findOne({relations: ["ingredients"], where: {
        id: req.params.id
    }})

    product.name = req.body.name
    product.price = req.body.price
    product.ingredients = await Ingredient.find({where: { id: In(req.body.ingredients) }})

    await product.save()
    res.json({status : 200, data: {product}})

});

router.delete('/products/:id', checkAdmin, async (req, res) => {

    let product = await Product.findOne({relations: ["ingredients"], where: {
        id: req.params.id
    }})

    await Product.delete({
        id: product.id,
        });
    res.json({status : 200, data: "Produit supprimé !"})

});
export default router