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
            "tarea_titulo": "Fullstack",
            "tarea_descripcion": "Realizar un proyecto con node y vue",
            "tarea_fecha": "2023-07-29",
            "tarea_recordatorio": "2023-07-28",
            "id_user": 2,
            "id_tipo": 3
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
appTarea.put('/editar/:id', proxyTarea, proxyIds,(req,res)=>{
    /**
     * @var {req.body, req.params.id}
     * req.body = {
            "tarea_titulo": "Fullstack",
            "tarea_descripcion": "Realizar un proyecto con node y vue",
            "tarea_fecha": "2023-07-29",
            "tarea_recordatorio": "2023-07-28",
            "id_user": 2,
            "id_tipo": 3
        }
     */
    con.query(
        /*sql */`SELECT * FROM tarea WHERE tarea_id = ?`,
        req.params.id,
        (err, data, fill) => {
            (Object.entries(data).length === 0)
                ? res.status(400).send("Dato no encontrado")
                : con.query(
                /*sql */`UPDATE tarea SET ? WHERE tarea_id = ?`,
                    [req.body, req.params.id],
                    (err, data, fill) => {
                        if (err) console.log(err);
                        res.send("Datos actualizados correctamente");
                    }
                )
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