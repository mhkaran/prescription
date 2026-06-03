import express from "express";

class Get{
    public routes:express.Router;
    constructor(){
        this.routes = express.Router();

        this.routes.get('/health-check',async(_req:express.Request,_res:express.Response)=>{
            _res.status(200).send('prescription app is healthy!');
        });
    }
}

export const get = new Get()