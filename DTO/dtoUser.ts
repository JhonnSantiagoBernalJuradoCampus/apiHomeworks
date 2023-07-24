import { Expose, Transform } from "class-transformer";
import validator from "validator";
const { isEmail} = validator;
export class dtoUser{
    @Expose({ name: "usu_nombre" })
    @Transform(({ value }) => {
        if (/^[a-zA-Z\s]+$/.test(value)) return value;
        else throw { status: 400, message: "Error en el parámetro nombre" };
    })
    usu_nombre: String;

    @Expose({ name: "usu_email" })
    @Transform(({ value }) => {
        if (typeof value === 'number') {
            throw { status: 400, message: "Error en el parámetro email" };
          }
        if (isEmail(value)) return value;
        else throw { status: 400, message: "Formato de email inválido"}
    })
    usu_email: String;

    @Expose({ name: "usu_telefono" })
    @Transform(({ value }) => {
        if (Math.floor(value)) return Math.floor(value);
        else throw { status: 400, message: "Error en el parametro telefono"}
    })
    usu_telefono: number;

    @Expose({ name: "usu_apodo" })
    @Transform(({ value }) => {
        if (/^[a-zA-Z\s]+$/.test(value)) return value;
        else throw { status: 400, message: "Error en el parametro apodo" }
    })
    usu_apodo: String;

    constructor(usu_nombre: String, usu_email: String, usu_telefono:number, usu_apodo: String) {
        this.usu_nombre = usu_nombre;
        this.usu_email = usu_email;
        this.usu_telefono = usu_telefono;
        this.usu_apodo = usu_apodo;
    }
}