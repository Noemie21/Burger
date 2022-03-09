import "reflect-metadata";

import express from 'express';
import cors from 'cors';
import { User } from "./Models/User";
import { Command } from "./Models/Command";
import { Product } from "./Models/Product";
import { Ingredient } from "./Models/Ingredient";
import UsersRouter from './Routes/user';
import IngredientRouter from './Routes/ingredient';
import ProductRouter from './Routes/product';
import CommandRouter from './Routes/command';
import AdminRouter from './Routes/admin'
import { createConnection, getConnection } from "typeorm";
import * as bodyParser from 'body-parser'
import * as sha512 from 'js-sha512';
import * as jwt from 'jsonwebtoken';

var jwtExpress = require('express-jwt');
const app = express();

app.use(cors());
app.use(bodyParser.json())
app.use(jwtExpress({ secret: 'ThisIsMySecretSentence1234', algorithms: ['HS256']}).unless({path: ['/auth']}));
app.use(UsersRouter);
app.use(IngredientRouter);
app.use(ProductRouter);
app.use(CommandRouter);
app.use(AdminRouter);

createConnection({
    type: "mysql",
    host: "localhost",
    port: 8889,
    username: "root",
    password: "root",
    database: "burger_db",
    entities: [
        Command,
        Ingredient,
        Product,
        User,
        // __dirname + "/Models/*.ts"
    ],
    synchronize: true,
    logging: false
})

app.get('/', async (req, res) => {
    res.json({status: 200, data: "hello"})
});

app.post('/auth', async (req, res) => {
    let user = await User.findOne({where: {  
        username: req.body.username,
        password: sha512.sha512(req.body.password)
    }})
    console.log(user)
    let token = jwt.sign({ id: user.id }, 'ThisIsMySecretSentence1234');
  
    res.json({status: 200, data: token})
  
})

app.listen(7000);

//tsc
//nodemon src/app.ts