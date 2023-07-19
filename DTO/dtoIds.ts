import { Expose, Transform } from "class-transformer";
import validator from "validator";
const { isInt } = validator;

export class dtoIds{
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