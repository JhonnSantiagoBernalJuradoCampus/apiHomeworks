var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose } from "class-transformer";
import { IsDefined, IsString, IsInt, Max, Min } from "class-validator";
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
    Expose({ name: "tarea_titulo" }),
    IsDefined({ message: () => { throw { status: 400, message: "El parametro tarea_titulo es obligatorio" }; } }),
    IsString({ message: () => { throw { status: 400, message: "Error en el parametro tarea_titulo" }; } }),
    __metadata("design:type", String)
], dtoTarea.prototype, "tarea_titulo", void 0);
__decorate([
    Expose({ name: "tarea_descripcion" }),
    IsDefined({ message: () => { throw { status: 400, message: "El parametro tarea_descripcion es obligatorio" }; } }),
    IsString({ message: () => { throw { status: 400, message: "Error en el parametro tarea_descripcion" }; } }),
    __metadata("design:type", String)
], dtoTarea.prototype, "tarea_descripcion", void 0);
__decorate([
    Expose({ name: "tarea_fecha" }),
    IsDefined({ message: () => { throw { status: 400, message: "El parametro tarea_fecha es obligatorio" }; } }),
    IsString({ message: () => { throw { status: 400, message: "Error en el parametro tarea_fecha" }; } }),
    __metadata("design:type", String)
], dtoTarea.prototype, "tarea_fecha", void 0);
__decorate([
    Expose({ name: "tarea_recordatorio" }),
    IsDefined({ message: () => { throw { status: 400, message: "El parametro tarea_recordatorio es obligatorio" }; } }),
    IsString({ message: () => { throw { status: 400, message: "Error en el parametro tarea_recordatorio" }; } }),
    __metadata("design:type", String)
], dtoTarea.prototype, "tarea_recordatorio", void 0);
__decorate([
    Expose({ name: "id_user" }),
    IsDefined({ message: () => { throw { status: 400, message: "El parametro id_user es obligatorio" }; } }),
    IsInt({ message: () => { throw { status: 400, message: "Error en el parametro id_user" }; } }),
    Min(0, { message: () => { throw { status: 400, message: "El parametro id_user no puede ser menos a 1" }; } }),
    Max(100, { message: () => { throw { status: 400, message: "El parametro id_user no puede ser mayor a 100" }; } }),
    __metadata("design:type", Number)
], dtoTarea.prototype, "id_user", void 0);
__decorate([
    Expose({ name: "id_tipo" }),
    IsDefined({ message: () => { throw { status: 400, message: "El parametro id_tipo es obligatorio" }; } }),
    IsInt({ message: () => { throw { status: 400, message: "Error en el parametro id_tipo" }; } }),
    Min(0, { message: () => { throw { status: 400, message: "El parametro id_tipo no puede ser menos a 1" }; } }),
    Max(100, { message: () => { throw { status: 400, message: "El parametro id_tipo no puede ser mayor a 100" }; } }),
    __metadata("design:type", Number)
], dtoTarea.prototype, "id_tipo", void 0);
