import express from "express";

class Put{
    public routes:express.Router;
    constructor(){
        this.routes = express.Router();

        this.routes.put('/',async(_req:express.Request,_res:express.Response,next:express.NextFunction)=>{
            console.log('Hello from put request!');
            next();
        });
    }
}

export const put = new Put()