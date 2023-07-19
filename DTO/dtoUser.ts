import { Expose, Transform } from "class-transformer";
import validator from "validator";
const { isEmail, isInt } = validator;
export class dtoUser{
    @Expose({ name: "nombre" })
    @Transform(({ value }) => {
        if (/^[a-zA-Z\s]+$/.test(value)) return value;
        else throw { status: 400, message: "Error en el parámetro nombre" };
    })
    usu_nombre: String;

    @Expose({ name: "email" })
    @Transform(({ value }) => {
        if (typeof value === 'number') {
            throw { status: 400, message: "Error en el parámetro email" };
          }
        if (isEmail(value)) return value;
        else throw { status: 400, message: "Formato de email inválido"}
    })
    usu_email: String;

    @Expose({ name: "telefono" })
    @Transform(({ value }) => {
        if (Math.floor(value)) return Math.floor(value);
        else throw { status: 400, message: "Error en el parametro telefono"}
    })
    usu_telefono: number;

    @Expose({ name: "apodo" })
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

export class dtoUserParams{
    @Expose({ name: "id" })
    @Transform(({ value }) => {
        if (isInt(value, { min: 1, max: 100 })) return value;
        else throw { status: 400, message: "Error en el parametro id" }
    })
    id: number;
    
    constructor(id: number) {
        this.id = id;
    }
}