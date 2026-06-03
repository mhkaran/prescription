import { IDoctor } from "./IDoctor";

export interface IDoctorMedicine {
    id?: string;
    doctor?: IDoctor;
    name?: string;
    brand?: string;
    createDate?: Date;
}