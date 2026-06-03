import express from "express";
import {IServiceConfig} from "../interface";
import {middleware} from "./middleware";
const config:IServiceConfig = require("../../config.json");
import {Provider} from "./provider";
import {get,post,put} from "./routes";
import {initDataSource} from "../db";

declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

const provider = new Provider();
const app:express.Express = provider.app;

app.use(middleware);

app.use(get.routes);
app.use(post.routes);
app.use(put.routes);

initDataSource();

app.listen(config.port,()=> console.log(`server is running on port ${config.port}!`));

