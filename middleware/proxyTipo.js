import "reflect-metadata";
import { plainToClass } from "class-transformer";
import { dtoTipo } from "../controller/dtoTipo.js"

const proxyTipo = (req, res, next) => {
    try {
        let data = plainToClass(dtoTipo, req.body, { excludeExtraneousValues: true });
        req.body = data;
        next();
    } catch (error) {
        res.status(error.status).send(error.message);
    }
}

export default proxyTipo;