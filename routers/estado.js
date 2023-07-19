import { Router } from "express";
import dotenv from "dotenv";
import mysql from "mysql2";
dotenv.config();
const appEstado = Router();

let dbConfig = JSON.parse(process.env.DB_CONFIG);
const con = mysql.createPool(dbConfig);

appEstado.get('/', (req, res) => {
    con.query(
        /*sql*/`SELECT * FROM estado;`,
        (err, data, fill)=>{
            res.send(data)
        }
    )
})

export default appEstado;