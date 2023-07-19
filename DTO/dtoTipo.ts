import { Expose, Transform } from "class-transformer";

export class dtoTipo{
    @Expose({ name: "nombre" })
    @Transform(({ value }) => {
        if (/^[a-zA-Z\s]+$/.test(value)) return value;
        else throw { status: 400, message: "Error en el parametro nombre" }
    })
    tipo_nombre: String;

    constructor(tipo_nombre:String) {
        this.tipo_nombre = tipo_nombre;
    }
}