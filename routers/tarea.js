import { Router } from "express";
import dotenv from "dotenv";
import mysql from "mysql2";
import proxyIds from "../middleware/proxyIds.js";
import proxyTarea from "../middleware/proxyTarea.js";
dotenv.config();

const appTarea = Router();

const dbConfig = JSON.parse(process.env.DB_CONFIG);
const con = mysql.createPool(dbConfig);

appTarea.get('/:id?', proxyIds, (req, res) => {
    let sql = (req.params.id)
        ? ['SELECT * FROM tarea WHERE tarea_id = ?', req.params.id]
        : ['SELECT * FROM tarea']
    con.query(...sql,
        (err, data, fill) => {
            (Object.entries(data).length === 0)
            ? res.status(400).send("Dato no encontrado")
            : res.send(data);
        }
    )
})
appTarea.post('/agregar',proxyTarea, (req,res)=>{
    /**
     * @var {req.body}
     * req.body = {
            "titulo": "Fullstack",
            "descripcion": "Realizar un proyecto con node y vue",
            "fecha": "2023-07-29",
            "recordatorio": "2023-07-29 09:00:00",
            "user": 2,
            "tipo": 3
        }
     */
    const {tarea_titulo, tarea_descripcion, tarea_fecha, tarea_recordatorio, id_user, id_tipo } = req.body;
    con.query(
        `INSERT INTO tarea (tarea_titulo, tarea_descripcion, tarea_fecha, tarea_recordatorio, tarea_created_at, id_user, id_tipo) VALUES (?,?,?,?,CURDATE(),?,?)`,
        [tarea_titulo, tarea_descripcion, tarea_fecha, tarea_recordatorio, id_user, id_tipo],
        (err,data,fill) =>{
            if (err) {
                res.send(err);
            }
            res.send(`Datos subidos con exito`);
        }
    )
})
appTarea.delete('/eliminar/:id',proxyIds ,(req,res)=>{
    con.query(
        /*sql */`DELETE FROM tarea WHERE tarea_id = ?`,
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

export default appTarea;