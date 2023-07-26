import "reflect-metadata";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { dtoTarea } from "../controller/dtoTarea.js";

const proxyTarea = async (req,res,next)=>{
    try{
        const newTarea = new dtoTarea();
        Object.assign(newTarea, req.body);
        try {
            const validationErrors = await validate(newTarea);
            let data = plainToClass(dtoTarea, req.body, {excludeExtraneousValues: true})
            req.body = data;
            next()
        } catch (error) {
            console.log(error);
            res.status(error.status).send(error.message);
        }
    } catch (err){
        console.log(err);
    }
}

export default proxyTarea;