import { IDoctor } from "./IDoctor";
import { IBillingPlan } from "./IBillingPlan";

export interface IBillingPayment {
    id?: string;
    doctor?: IDoctor;
    billingPlan?: IBillingPlan;
    amount?: string;
    tax?: string;
    billablePrescriptionRecord?: string;
    nonBillablePrescriptionRecord?: string;
    paymentReference?: string;
    createDate?: Date;
    paymentDate?: Date;
}