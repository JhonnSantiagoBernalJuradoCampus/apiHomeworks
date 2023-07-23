import {Expose, Transform} from "class-transformer";
import {IsDate, IsDefined, IsString,IsInt, Max, Min} from "class-validator"
import validator from "validator";
/* req.body = {
    "tarea_titulo": "Fullstack",
    "tarea_descripcion": "Realizar un proyecto con node y vue",
    "tarea_fecha": "2023-07-29",
    "tarea_recordatorio": "2023-07-28",
    "id_user": 2,
    "id_tipo": 3
}
*/

export class dtoTarea {
    @Expose({name: "tarea_titulo"})
    @IsDefined({message: ()=>{throw{status:400,message:"El parametro tarea_titulo es obligatorio"}}})
    @IsString({message: ()=>{throw{status:400,message:"Error en el parametro tarea_titulo"}}})
    tarea_titulo: String;
    
    @Expose({name: "tarea_descripcion"})
    @IsDefined({message: ()=>{throw{status:400,message:"El parametro tarea_descripcion es obligatorio"}}})
    @IsString({message: ()=>{throw{status:400,message:"Error en el parametro tarea_descripcion"}}})
    tarea_descripcion: String;
    
    @Expose({name: "tarea_fecha"})
    @IsDefined({message: ()=>{throw{status:400,message:"El parametro tarea_fecha es obligatorio"}}})
    @IsString({message: ()=>{throw{status:400,message:"Error en el parametro tarea_fecha"}}})
    tarea_fecha: String;

    @Expose({name: "tarea_recordatorio"})
    @IsDefined({message: ()=>{throw{status:400,message:"El parametro tarea_recordatorio es obligatorio"}}})
    @IsString({message: ()=>{throw{status:400,message:"Error en el parametro tarea_recordatorio"}}})
    tarea_recordatorio: string;
    
    @Expose({name: "id_user"})
    @IsDefined({message: ()=>{throw{status:400,message:"El parametro id_user es obligatorio"}}})
    @IsInt({message: ()=>{throw{status:400,message:"Error en el parametro id_user"}}})
    @Min(0, {message: ()=>{throw{status:400,message:"El parametro id_user no puede ser menos a 1"}}})
    @Max(100, {message: ()=>{throw{status:400,message:"El parametro id_user no puede ser mayor a 100"}}})
    id_user: number;
    
    @Expose({name: "id_tipo"})
    @IsDefined({message: ()=>{throw{status:400,message:"El parametro id_tipo es obligatorio"}}})
    @IsInt({message: ()=>{throw{status:400,message:"Error en el parametro id_tipo"}}})
    @Min(0, {message: ()=>{throw{status:400,message:"El parametro id_tipo no puede ser menos a 1"}}})
    @Max(100, {message: ()=>{throw{status:400,message:"El parametro id_tipo no puede ser mayor a 100"}}})
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