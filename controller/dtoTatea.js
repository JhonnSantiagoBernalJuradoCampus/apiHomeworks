var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose, Transform } from "class-transformer";
import { IsDateString } from "class-validator";
import validator from "validator";
const { isInt } = validator;
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
    constructor(tarea_titulo, tarea_descripcion, tarea_fecha, tarea_recordatorio, id_user, id_tipo) {
        this.tarea_titulo = tarea_titulo;
        this.tarea_descripcion = tarea_descripcion;
        this.tarea_fecha = tarea_fecha;
        this.tarea_recordatorio = tarea_recordatorio;
        this.id_user = id_user;
        this.id_tipo = id_tipo;
    }
}
__decorate([
    Expose({ name: "titulo" }),
    Transform(({ value }) => {
        if (/^[a-zA-Z\s]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en el parámetro titulo" };
    }),
    __metadata("design:type", String)
], dtoTarea.prototype, "tarea_titulo", void 0);
__decorate([
    Expose({ name: "descripcion" }),
    Transform(({ value }) => {
        if (/^[a-zA-Z\s]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en el parámetro descripcion" };
    }),
    __metadata("design:type", String)
], dtoTarea.prototype, "tarea_descripcion", void 0);
__decorate([
    Expose({ name: "fecha" }),
    IsDateString(),
    Transform(({ value }) => {
        if (/^(?:\d{4}-\d{2}-\d{2})$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en el parámetro fecha" };
    }),
    __metadata("design:type", String)
], dtoTarea.prototype, "tarea_fecha", void 0);
__decorate([
    Expose({ name: "recordatorio" }),
    IsDateString(),
    Transform(({ value }) => {
        if (/^(?:\d{4}-\d{2}-\d{2})$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en el parámetro recordatorio" };
    }),
    __metadata("design:type", Object)
], dtoTarea.prototype, "tarea_recordatorio", void 0);
__decorate([
    Expose({ name: "user" }),
    Transform(({ value }) => {
        if (isInt(value, { min: 0, max: 100 }))
            return value;
        else
            throw { status: 400, message: "Error en el parametro user" };
    }),
    __metadata("design:type", Number)
], dtoTarea.prototype, "id_user", void 0);
__decorate([
    Expose({ name: "tipo" }),
    Transform(({ value }) => {
        if (isInt(value, { min: 0, max: 100 }))
            return value;
        else
            throw { status: 400, message: "Error en el parametro tipo" };
    }),
    __metadata("design:type", Number)
], dtoTarea.prototype, "id_tipo", void 0);
