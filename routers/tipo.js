import { Router } from "express";
import dotenv from "dotenv";
import mysql from "mysql2";
import proxyTipo from "../middleware/proxyTipo.js";
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
appTipo.post('/', proxyTipo ,(req, res) => {
    /**
     * @var {req.body}
     * req.body ={
     *      "nombre": "Sociales"
     * }
    */
    const { tipo_nombre } = req.body;
    con.query(
        /*sql */`INSERT INTO tipo (tipo_nombre, tipo_created_at) VALUES (?, CURDATE());`,
        tipo_nombre,
        (err, data, fill) => {
            res.send("Datos subidos con exito");
        }
    )
})

export default appTipo;