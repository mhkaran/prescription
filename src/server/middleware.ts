import express from "express";
import token from "../util/token"; 
import constant from "../util/constant";

export const middleware = (_req:express.Request,_res:express.Response,next:express.NextFunction)=>{
  if (constant.NON_AUTHORIZED_END_POINTS.includes(_req.path)) {
    return next();
  } 
  token.validate(_req.headers["authorization"] as string).then((playload)=>{
        _req.user = playload;
        next();
    }).catch((_error:any)=>{
        _res.status(401).json({message:"Unauthorized"});
    });
};
