import { IDoctor } from "./IDoctor";

export interface IBillingPlan {
    id?: string;
    name?: string;
    doctor?: IDoctor;
    startDate?: Date;
    endDate?: Date;
    active?: boolean;
}