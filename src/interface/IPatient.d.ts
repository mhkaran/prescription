import { IDoctorPatient } from "./IDoctorPatient";
import { IPrescribe } from "./IPrescribe";

export interface IPatient {
    id?: string;
    name?: string;
    gender?: string;
    dateOfBirth?: Date;
    mobile?: string;
    email?: string;
    address?: string;
    pincode?: string;
    createDate?: Date;
    updateDate?: Date;
    doctorPatients?: IDoctorPatient[];
    prescriptions?: IPrescribe[];
}