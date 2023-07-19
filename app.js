import express from "express";
import dotenv from "dotenv";
import appUser from "./routers/user.js";
import appEstado from "./routers/estado.js";
import appTipo from "./routers/tipo.js";
dotenv.config();
let appExpress = express();

appExpress.use(express.json());
appExpress.use('/user', appUser);
appExpress.use('/estado', appEstado);
appExpress.use('/tipo', appTipo);

let myConfig = JSON.parse(process.env.MY_CONFIG);
appExpress.listen(myConfig, ()=>{
    console.log(`http://${myConfig.hostname}:${myConfig.port}`);
})