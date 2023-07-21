import { Router } from "express";
import dotenv from "dotenv";
import mysql from "mysql2";
import proxyIds from "../middleware/proxyIds.js";
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
appTarea.post('/', (req,res)=>{
    /**
     * @var {req.body}
     * req.body = {
            "tarea_titulo": "Fullstack",
            "tarea_descripcion": "Realizar un proyecto con node y vue",
            "tarea_fecha": "2023-07-29",
            "tarea_recordatorio": "2023-07-29 09:00:00",
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

export default appTarea;