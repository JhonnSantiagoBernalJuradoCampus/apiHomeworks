import "reflect-metadata";
import { plainToClass } from "class-transformer";
import { dtoUser, dtoUserParams } from "../controller/dtoUser.js";

const proxyUser = (req, res, next) => {
    try {
        let data = plainToClass(dtoUser, req.body, { excludeExtraneousValues: true })
        req.body = data;
        next();
    } catch (error) {
        res.status(error.status).send(error.message);
    }
}
const proxyUserParams = (req, res, next) => {
    if (req.params.id !== undefined && req.params.id !== null) {
        try {
            let data = plainToClass(dtoUserParams, req.params, { excludeExtraneousValues: true })
            req.params = data;
            next();
        } catch (error) {
            res.status(error.status).send(error.message);
        }
    }
    else {
        next();
    }
}
export default proxyUser;
export { proxyUserParams };