
import {
  Entity,
  Column,
  OneToMany,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn
} from "typeorm";
import { Doctor } from "./doctor.entity";
import { Patient } from "./patient.entity";
import { PrescribeMedicine } from "./prescribeMedicine.entity";

@Entity("prescribe")
export class Prescribe {
  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @ManyToOne(() => Doctor, (doctor: Doctor) => doctor.prescriptions)
  @JoinColumn({ name: "doctor_id" })
  doctor?: Doctor;

  @ManyToOne(() => Patient, (patient: Patient) => patient.prescriptions)
  @JoinColumn({ name: "patient_id" })
  patient?: Patient;

  @Column({ length:100, nullable:true })
  name?: string;

  @Column({ name:"pic_url", length:50, nullable:true })
  picURL?: string;

  @Column({ nullable: true,length:500, })
  comment?: string;

  @CreateDateColumn({ type: "timestamptz", name:"create_date"})
  createDate?: Date;

  @OneToMany(() => PrescribeMedicine, (pm : PrescribeMedicine) => pm.prescribe)
  medicines?: PrescribeMedicine[];
}