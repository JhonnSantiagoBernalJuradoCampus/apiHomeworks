import { Router } from "express";
import dotenv from "dotenv";
import mysql from "mysql2";
import proxyIds from "../middleware/proxyIds.js";
dotenv.config();
const appEstado = Router();

let dbConfig = JSON.parse(process.env.DB_CONFIG);
const con = mysql.createPool(dbConfig);

appEstado.get('/:id?',proxyIds ,(req, res) => {
    let sql = (req.params.id)
    ? ['SELECT * FROM estado WHERE estado_id = ?', req.params.id]
    : ['SELECT * FROM estado']
    con.query(...sql,
        (err, data, fill)=>{
            res.send(data)
        }
    )
})

export default appEstado;