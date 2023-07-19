import { Router } from "express";
import dotenv from "dotenv";
import mysql from "mysql2";
dotenv.config();
const appTipo = Router();

let dbConfig = JSON.parse(process.env.DB_CONFIG);
const con = mysql.createPool(dbConfig);

appTipo.get('/:id?', (req, res) => {
    let sql = (req.params.id)
        ? ["SELECT * FROM tipo WHERE tipo_id = ?"]
        : ["SELECT * FROM tipo"]
    con.query(...sql,
        req.params.id,
        (err, data, fill) => {
            res.send(data);
        }
    )
})

export default appTipo;