import { IDoctor } from "./IDoctor";
import { IMedicine } from "./IMedicine";

export interface IDiagnosisMedicine {
    id?: string;
    doctor?: IDoctor;
    medicine?: IMedicine;
    diagnosisName?: string;
    usage?: string;
    days?: number;
    dose?: string;
    report?: boolean;
}