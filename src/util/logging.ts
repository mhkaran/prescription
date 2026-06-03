import {ILogs} from "../interface"
import _retry from "./retry";

class Logging{
    constructor(){

    }
    public async log(_logs:ILogs){
        try{} catch(ex){
        // retry code
        }
    }
}

const logging = new Logging();

export default logging;