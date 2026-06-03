import { IPrescribe } from "./IPrescribe";

export interface IPrescribeMedicine {
    id?: string;
    prescribe?: IPrescribe;
    medicineName?: string;
    usage?: string;
    days?: number;
    dose?: string;
    report?: boolean;
    comments?: string;
}