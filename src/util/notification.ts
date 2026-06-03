import {ILogs} from "../interface"
import _retry from "./retry";

class Notification{
    constructor(){

    }
    public async send(_logs:ILogs){
        try{} catch(ex){
        // retry code
        }
    }
}

const notification = new Notification();

export default notification;