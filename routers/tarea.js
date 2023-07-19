import { Router } from "express";
import dotenv from "dotenv";
import mysql from "mysql2";
dotenv.config();

const appTarea = Router();

const dbConfig = JSON.parse(process.env.DB_CONFIG);
const con = mysql.createPool(dbConfig);

appTarea.get('/:id?', (req, res) => {
    let sql = (req.params.id)
        ? ['SELECT * FROM tarea WHERE tarea_id = ?', req.params.id]
        : ['SELECT * FROM tarea']
    con.query(...sql,
        (err, data, fill) => {
            res.send(data);
        }
    )
})

export default appTarea;