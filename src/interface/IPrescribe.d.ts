import { IDoctor } from "./IDoctor";
import { IPatient } from "./IPatient";
import { IPrescribeMedicine } from "./IPrescribeMedicine";

export interface IPrescribe {
    id?: string;
    doctor?: IDoctor;
    patient?: IPatient;
    diagnosisName?: string;
    picURL?: string;
    comments?: string;
    createDate?: Date;
    medicines?: IPrescribeMedicine[];
}