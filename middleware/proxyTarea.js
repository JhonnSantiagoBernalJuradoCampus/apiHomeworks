import "reflect-metadata";
import { plainToClass } from "class-transformer";
import { dtoTarea } from "../controller/dtoTarea.js";

const proxyTarea = (req,res,next)=>{
    try{
        let data = plainToClass(dtoTarea, req.body, {strategy: "excludeAll"})
        req.body = data;
        next();
    } catch (error) {
        res.status(error.status).send(error.message);
    }
}

export default proxyTarea;