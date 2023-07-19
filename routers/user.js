import { Router } from "express";
import dotenv from "dotenv";
import mysql from "mysql2";
dotenv.config();
const appUser = Router();

let dbConfig = JSON.parse(process.env.DB_CONFIG);
const con = mysql.createPool(dbConfig);


appUser.get('/:id?', (req, res) => {
    const sql = (req.params.id)
        ? [`SELECT * FROM user WHERE usu_id = ?`, req.params.id]
        : [`SELECT * FROM user`];
    con.query(...sql,
        (err, data, fill) => {
            res.send(data);
        }
    )
});

export default appUser;