import express from "express";
import {doctorController} from "../../controller";
import multer from "multer";

class Post{
    public routes:express.Router;
    constructor(){
        this.routes = express.Router();

        this.routes.post('/doctor/create',
            upload.fields([
              { name: "logo", maxCount: 1 },
              { name: "signature", maxCount: 1 },
            ]),async(req:express.Request,res:express.Response,_next:express.NextFunction)=>{
            await doctorController.create(req,res);
        });
   
        this.routes.post('/doctor/update',async(req:express.Request,res:express.Response,_next:express.NextFunction)=>{
                  await doctorController.update(req,res);
              });

        this.routes.post('/doctor/login',async(req:express.Request,res:express.Response,_next:express.NextFunction)=>{
                  await doctorController.login(req,res);
              });
          }
 }


export const upload = multer({
  storage: multer.memoryStorage(), // store file in memory buffer
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
  },
});

export const post = new Post()