import jwt from "jsonwebtoken";
import crypto from "./crypto";
import {IJWTPlayload} from "../interface";

class Token{
    private secret:jwt.Secret|undefined;
    private expires:number|number;
    constructor(){
        this.secret = process.env.SECRET_KEY || "E96A93DF96EC3761DF669B05D368D45067F608290E263AC4D3B09A598A2CAD16";
        this.expires = 90
    }

    public async create(playload:IJWTPlayload,expires:number):Promise<string>{
        let encryptedStr = await crypto.encrypt(JSON.stringify(playload));
        return jwt.sign({data:encryptedStr},this.secret!,{expiresIn:(expires ? expires : this.expires)});
    }

    public async validate(accessToken:string):Promise<IJWTPlayload>{
        const decoded = jwt.verify(accessToken,this.secret!) as jwt.JwtPayload;
        let encryptedStr = decoded.data;
        let playload = await crypto.decrypt(encryptedStr);
        return JSON.parse(playload);
    }
}

const token = new Token();

export default token;