import { Router } from "express";
import dotenv from "dotenv";
import mysql from "mysql2";
import proxyIds from "../middleware/proxyIds.js";
import proxyTarea from "../middleware/proxyTarea.js";
import { validateToken } from "../middleware/proxyJwt.js";
dotenv.config();

const appTarea = Router();

const dbConfig = JSON.parse(process.env.DB_CONFIG);
const con = mysql.createPool(dbConfig);

appTarea.get('/user/:id', validateToken ,proxyIds ,(req,res)=>{
    con.query(
        `SELECT u.usu_nombre, t.tarea_id, t.tarea_titulo, t.tarea_descripcion, t.tarea_fecha, t.tarea_recordatorio FROM tarea AS t JOIN user AS u ON t.id_user = u.usu_id WHERE t.id_user = ${req.params.id} AND t.id_estado = 1 AND t.tarea_fecha BETWEEN CURDATE() AND DATE_ADD(CURDATE(), INTERVAL 7 DAY);`,
        (err,data,fill)=>{
            if (err) {
                console.log(err);
                res.status(400).send("Error al obtener datos")
            }
            res.send(data);
        }
    )
})
appTarea.get('/:id?', validateToken ,proxyIds, (req, res) => {
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
appTarea.post('/agregar',validateToken,proxyTarea, (req,res)=>{
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
appTarea.put('/editar/:id', validateToken ,proxyTarea, proxyIds,(req,res)=>{
    /**
     * @var {req.body, req.params.id}
     * req.body = {
            "tarea_titulo": "Fullstack",
            "tarea_descripcion": "Realizar un proyecto con node y react",
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
appTarea.delete('/eliminar/:id',validateToken,proxyIds ,(req,res)=>{
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