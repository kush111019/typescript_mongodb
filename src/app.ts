import express, { Express } from 'express';
import bodyParser from 'body-parser';
const route = require("./routes/route")

export const app: Express = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',route)

module.exports = {app};