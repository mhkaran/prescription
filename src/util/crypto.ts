import CryptoJS from "crypto-js";

class Crypto{
    private key:string|undefined
    constructor(){
        this.key = process.env.SECRET_KEY || "fjunine4821ds45sdds87";
    }

    public async encrypt(message:string){
        return CryptoJS.AES.encrypt(message, this.key!).toString();
    }

    public async decrypt(text:string){
        return CryptoJS.AES.decrypt(text,this.key!).toString(CryptoJS.enc.Utf8);
    }
}

const crypto = new Crypto();

export default crypto;