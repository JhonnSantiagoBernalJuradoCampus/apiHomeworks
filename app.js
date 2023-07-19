import express from "express";
import dotenv from "dotenv";
dotenv.config();
let appExpress = express();

appExpress.use(express.json());
appExpress.get('/', (req,res)=>{
    res.send("Servidor funcionando")
});

let myConfig = JSON.parse(process.env.MY_CONFIG);
appExpress.listen(myConfig, ()=>{
    console.log(`http://${myConfig.hostname}:${myConfig.port}`);
})