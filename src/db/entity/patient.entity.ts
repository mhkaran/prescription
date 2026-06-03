// src/modules/patient/entities/patient.entity.ts

import {
  Entity,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import { DoctorPatient } from "./doctorPatient.entity";
import { Prescribe } from "./prescribe.entity";

@Entity("patient")
export class Patient {
  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @Column({ length: 120 })
  name?: string;

  @Column({ type: "char", length: 1 })
  gender?: string;

  @Column({ type: "date", nullable: true, name:"date_of_birth" })
  dateOfBirth?: Date;

  @Column({ unique: true })
  mobile?: string;

  @Column({ length: 120, nullable: true })
  email?: string;

  @Column({ type: "text", nullable: true })
  address?: string;

  @Column({ length: 6, nullable: true })
  pincode?: string;

  @CreateDateColumn({ type: "timestamptz", name:"create_date" })
  createDate?: Date;

  @UpdateDateColumn({ type: "timestamptz", name:"update_date" })
  updateDate?: Date;

  @OneToMany(() => DoctorPatient, (dp : DoctorPatient ) => dp.patient)
  doctorPatients?: DoctorPatient[];

  @OneToMany(() => Prescribe, (p : Prescribe) => p.patient)
  prescriptions?: Prescribe[];
}