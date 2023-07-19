import express from "express";
import dotenv from "dotenv";
import appUser from "./routers/user.js";
dotenv.config();
let appExpress = express();

appExpress.use(express.json());
appExpress.use('/user', appUser);

let myConfig = JSON.parse(process.env.MY_CONFIG);
appExpress.listen(myConfig, ()=>{
    console.log(`http://${myConfig.hostname}:${myConfig.port}`);
})