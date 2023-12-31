import express from 'express';
import dotenv from 'dotenv';
import {nanoid} from "nanoid";

import { SignJWT } from 'jose';

dotenv.config();
let appJWT = express();

appJWT.use(express.json());

appJWT.get('/', async(req,res)=>{
    let usuario = {
        id: nanoid()
    }
    const encoder = new TextEncoder();
    const jwtconstructor = new SignJWT({usuario});
    const jwt = await jwtconstructor
    .setProtectedHeader({alg: "HS256", typ: "JWT"})
    .setIssuedAt()
    .setExpirationTime("6600s")
    .sign(encoder.encode(process.env.JWT_PRIVATE_KEY));
    res.send({jwt});
});

export default appJWT;