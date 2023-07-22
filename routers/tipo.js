import { Router } from "express";
import dotenv from "dotenv";
import mysql from "mysql2";
import proxyTipo from "../middleware/proxyTipo.js";
import proxyIds from "../middleware/proxyIds.js";
dotenv.config();
const appTipo = Router();

let dbConfig = JSON.parse(process.env.DB_CONFIG);
const con = mysql.createPool(dbConfig);

appTipo.get('/:id?', proxyIds , (req, res) => {
    let sql = (req.params.id)
        ? ["SELECT * FROM tipo WHERE tipo_id = ?",req.params.id]
        : ["SELECT * FROM tipo"]
    con.query(...sql,
        (err, data, fill) => {
            (Object.entries(data).length === 0)
            ? res.status(400).send("Dato no encontrado")
            : res.send(data);
        }
    )
})
appTipo.post('/agregar', proxyTipo ,(req, res) => {
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
            if (err) {
                res.send(err);
            }
            res.send("Datos subidos con exito");
        }
    )
})
appTipo.delete('/:id', proxyIds, (req,res) =>{
    con.query(
        /*sql */`DELETE FROM tipo WHERE tipo_id = ?`,
        req.params.id,
        (err,data,fill)=>{
            if(err){
                console.log(err);
                res.status(400).send("Error al eliminar datos")
            }
            res.send(`El usuario con id ${req.params.id} se ha eliminado :v`)
        }
    )
})

export default appTipo;