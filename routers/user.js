import { Router } from "express";
import dotenv from "dotenv";
import mysql from "mysql2";
import proxyUser from "../middleware/proxyUser.js";
import proxyIds from "../middleware/proxyIds.js";
dotenv.config();
const appUser = Router();

let dbConfig = JSON.parse(process.env.DB_CONFIG);
const con = mysql.createPool(dbConfig);


appUser.get('/:id?', proxyIds , (req, res) => {
    const sql = (req.params.id)
        ? [`SELECT * FROM user WHERE usu_id = ?`, req.params.id]
        : [`SELECT * FROM user`];
    con.query(...sql,
        (err, data, fill) => {
            (Object.entries(data).length === 0)
            ? res.status(400).send("Dato no encontrado")
            : res.send(data);
        }
    )
});

appUser.post('/', proxyUser ,(req, res) => {
    /**
     * @var {req.body}
     * req.body =
     *      {
     *          "nombre": "Angela Esperanza Almeida Rincon", 
     *          "email": "angelajurado@gmail.com", 
     *          "telefono": "3118124321", 
     *          "apodo": "Angie"
     *      }
    */
    const { usu_nombre, usu_email, usu_telefono, usu_apodo } = req.body;

    con.query(
        /*sql */`INSERT INTO user (usu_nombre,usu_email,usu_telefono, usu_apodo, usu_created_at) VALUES (?,?,?,?,CURDATE())`,
        [usu_nombre, usu_email, usu_telefono, usu_apodo],
        (err, data, fill) => {
            res.send("Datos subidos con exito");
        }
    );
})

export default appUser;