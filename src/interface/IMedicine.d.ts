import { IDiagnosisMedicine } from "./IDiagnosisMedicine";

export interface IMedicine {
    id?: string;
    brand?: string;
    name?: string;
    diagnosisMedicines?: IDiagnosisMedicine[];
}