import "reflect-metadata";

import express from 'express';

import { createConnection, getConnection } from "typeorm";
import * as bodyParser from 'body-parser'


const app = express();

app.use(bodyParser.json())

/*createConnection({
    type: "mysql",
    host: "localhost",
    port: 8889,
    username: "root",
    password: "root",
    database: "node",
    entities: [
        User,
        Message
        // __dirname + "/Models/*.ts"
    ],
    synchronize: true,
    logging: false
})
*/
app.get('/', async (req, res) => {

    // let user = new User();
    // user.firstname = "John"
    // user.lastname = "Doe"

    // let result = await getConnection().manager.save(user)

    // let result = await User.findOne({where: { firstname: "John" }})

    //let result = await User.find()


    res.json({status: 200, data: "hello"})

});

app.listen(7000);