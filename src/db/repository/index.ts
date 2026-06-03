import {BillingPaymentRepository} from "./billingPayment.repository"
import {BillingPlanRepository} from "./billingPlan.repository"
import {DiagnosisMedicineRepository} from "./diagnosisMedicine.repository"
import {DoctorMedicineRepository} from "./doctorMedicine.repository"
import {DoctorPatientRepository} from "./doctorPatient.repository"
import {DoctorRepository} from "./doctor.repository"
import {MedicineRepository} from "./medicine.repository"
import {PatientRepository} from "./patient.repository"
import {PrescribeMedicineRepository} from "./prescribeMedicine.repository"
import {PrescribeRepository} from "./prescribe.repository"

const billingPaymentRepository = new BillingPaymentRepository();
const billingPlanRepository = new BillingPlanRepository();
const diagnosisMedicineRepository = new DiagnosisMedicineRepository();
const doctorMedicineRepository = new DoctorMedicineRepository();
const doctorPatientRepository = new DoctorPatientRepository();
const doctorRepository = new DoctorRepository();
const medicineRepository = new MedicineRepository();
const patientRepository = new PatientRepository();
const prescribeMedicineRepository = new PrescribeMedicineRepository();
const prescribeRepository = new PrescribeRepository();

export {
    billingPaymentRepository,
    billingPlanRepository,
    diagnosisMedicineRepository,
    doctorMedicineRepository,
    doctorPatientRepository,
    doctorRepository,
    medicineRepository,
    patientRepository,
    prescribeMedicineRepository,
    prescribeRepository
}