import { IDoctorPatient } from "./IDoctorPatient";
import { IDoctorMedicine } from "./IDoctorMedicine";
import { IDiagnosisMedicine } from "./IDiagnosisMedicine";
import { IPrescribe } from "./IPrescribe";
import { IBillingPlan } from "./IBillingPlan";
import { IBillingPayment } from "./IBillingPayment";

export interface IDoctor {
    id?: string;
    name?: string;
    gender?: string;
    specialization?: string;
    licenseNumber?: string;
    address?: string;
    city?: string;
    state?: string;
    country?: string;
    pincode?: string;
    terms?: string;
    logoURL?: string;
    signatureURL?: string;
    mobile?: string;
    email?: string;
    isApproved?: boolean;
    isActive?: boolean;
    approveRejectBy?: string;
    approveRejectDate?: Date;
    createDate?: Date;
    updateDate?: Date;
    updatedBy?: string;
    approveRejectComments?: string;
    doctorPatients?: IDoctorPatient[];
    doctorMedicines?: IDoctorMedicine[];
    diagnosisMedicines?: IDiagnosisMedicine[];
    prescriptions?: IPrescribe[];
    billingPlans?: IBillingPlan[];
    billingPayments?: IBillingPayment[];
}