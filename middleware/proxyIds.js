import "reflect-metadata";
import { plainToClass } from "class-transformer";
import { dtoIds } from "../controller/dtoIds.js";

const proxyIds = (req, res, next) => {
    if (req.params.id !== undefined && req.params.id !== null) {
        try {
            let data = plainToClass(dtoIds, req.params, { excludeExtraneousValues: true })
            req.params = data;
            next();
        } catch (error) {
            res.status(error.status).send(error.message);
        }
    }
    else {
        next();
    }
};

export default proxyIds;
