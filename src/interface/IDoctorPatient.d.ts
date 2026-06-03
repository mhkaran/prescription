import { IDoctor } from "./IDoctor";
import { IPatient } from "./IPatient";

export interface IDoctorPatient {
    id?: string;
    doctor?: IDoctor;
    patient?: IPatient;
}