import {Expose, Transform} from "class-transformer";
import {IsDateString} from "class-validator"
import validator from "validator";
const {isInt} = validator;
/* req.body = {
    "tarea_titulo": "Fullstack",
    "tarea_descripcion": "Realizar un proyecto con node y vue",
    "tarea_fecha": "2023-07-29",
    "tarea_recordatorio": "2023-07-29 09:00:00",
    "id_user": 2,
    "id_tipo": 3
}
*/

export class dtoTarea {
    @Expose({name: "titulo"})
    @Transform(({value})=>{
        if (/^[a-zA-Z\s]+$/.test(value)) return value;
        else throw { status: 400, message: "Error en el parámetro titulo" };
    })
    tarea_titulo: String;
    @Expose({name: "descripcion"})
    @Transform(({value})=>{
        if (/^[a-zA-Z\s]+$/.test(value)) return value;
        else throw { status: 400, message: "Error en el parámetro descripcion" };
    })
    tarea_descripcion: String;
    @Expose({name: "fecha"})
    @IsDateString()
    @Transform(({value})=>{
        if(/^(?:\d{4}-\d{2}-\d{2})$/.test(value)) return value;
        else throw { status: 400, message: "Error en el parámetro fecha" };
    })
    tarea_fecha: String;
    @Expose({name: "recordatorio"})
    @IsDateString()
    @Transform(({value})=>{
        if(/^(?:\d{4}-\d{2}-\d{2}(?: \d{2}:\d{2})?)$/.test(value)) return value;
        else throw { status: 400, message: "Error en el parámetro recordatorio" };
    })
    tarea_recordatorio: string;
    @Expose({name: "user"})
    @Transform(({value})=>{
        if(isInt(value, {min:0, max:100})) return value;
        else throw {status: 400, message: "Error en el parametro user"}
    })
    id_user: number;
    @Expose({name: "tipo"})
    @Transform(({value})=>{
        if(isInt(value, {min:0, max:100})) return value;
        else throw {status: 400, message: "Error en el parametro tipo"}
    })
    id_tipo: number;
    constructor(tarea_titulo: string,tarea_descripcion: string, tarea_fecha: string, tarea_recordatorio: string, id_user: number, id_tipo: number){
        this.tarea_titulo = tarea_titulo;
        this.tarea_descripcion = tarea_descripcion;
        this.tarea_fecha = tarea_fecha;
        this.tarea_recordatorio = tarea_recordatorio;
        this.id_user = id_user;
        this.id_tipo = id_tipo;
    }
}