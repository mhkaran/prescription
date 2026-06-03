import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit"

export class Provider{
    public app:express.Express;

    constructor(){
        this.app= express();
        this.app.use(cors());

        this.app.use(express.json({limit:'5mb'}));
        this.app.use(express.urlencoded({extended:true, limit:'5mb', parameterLimit:50}));

        const limiter = rateLimit({
            windowMs: 15*60*100,
            max:100,
            message: "too many request from this IP, plesae try after sometime"
        });

        this.app.use(limiter);

    }
}

export const provider = new Provider();