import "reflect-metadata";
import { plainToClass } from "class-transformer";
import { dtoUser } from "../controller/dtoUser.js";

const proxyUser = (req, res, next) => {
    try {
        let data = plainToClass(dtoUser, req.body, { excludeExtraneousValues: true })
        req.body = data;
        next();
    } catch (error) {
        res.status(error.status).send(error.message);
    }
}

export default proxyUser;