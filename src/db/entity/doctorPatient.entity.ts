import {
  Entity,
  ManyToOne,
  Unique,
  PrimaryGeneratedColumn,
  JoinColumn
} from "typeorm";
import { Doctor } from "./doctor.entity";
import { Patient } from "./patient.entity";

@Entity("doctor_patient")
@Unique(["doctor", "patient"])
export class DoctorPatient {
  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @ManyToOne(() => Doctor, (doctor) => doctor.doctorPatients, { onDelete: "CASCADE" })
  @JoinColumn({ name: "doctor_id" })
  doctor?: Doctor;

  @ManyToOne(() => Patient, (patient) => patient.doctorPatients, { onDelete: "CASCADE" })
  @JoinColumn({ name: "patient_id" })
  patient?: Patient;
}