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
import validator from "validator";
const { isEmail } = validator;
export class dtoUser {
    constructor(usu_nombre, usu_email, usu_telefono, usu_apodo) {
        this.usu_nombre = usu_nombre;
        this.usu_email = usu_email;
        this.usu_telefono = usu_telefono;
        this.usu_apodo = usu_apodo;
    }
}
__decorate([
    Expose({ name: "usu_nombre" }),
    Transform(({ value }) => {
        if (/^[a-zA-Z\s]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en el parámetro nombre" };
    }),
    __metadata("design:type", String)
], dtoUser.prototype, "usu_nombre", void 0);
__decorate([
    Expose({ name: "usu_email" }),
    Transform(({ value }) => {
        if (typeof value === 'number') {
            throw { status: 400, message: "Error en el parámetro email" };
        }
        if (isEmail(value))
            return value;
        else
            throw { status: 400, message: "Formato de email inválido" };
    }),
    __metadata("design:type", String)
], dtoUser.prototype, "usu_email", void 0);
__decorate([
    Expose({ name: "usu_telefono" }),
    Transform(({ value }) => {
        if (Math.floor(value))
            return Math.floor(value);
        else
            throw { status: 400, message: "Error en el parametro telefono" };
    }),
    __metadata("design:type", Number)
], dtoUser.prototype, "usu_telefono", void 0);
__decorate([
    Expose({ name: "usu_apodo" }),
    Transform(({ value }) => {
        if (/^[a-zA-Z\s]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en el parametro apodo" };
    }),
    __metadata("design:type", String)
], dtoUser.prototype, "usu_apodo", void 0);
