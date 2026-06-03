// src/modules/doctor/entities/doctor.entity.ts

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
import { DoctorMedicine } from "./doctorMedicine.entity";
import { DiagnosisMedicine } from "./diagnosisMedicine.entity";
import { Prescribe } from "./prescribe.entity";
import { BillingPlan } from "./billingPlan.entity";
import { BillingPayment } from "./billingPayment.entity";

@Entity("doctor")
export class Doctor {
  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @Column({ length: 120 })
  name?: string;

  @Column({ type: "char", length: 1 })
  gender?: string;

  @Column({ length: 150 })
  specialization?: string;

  @Column({ name: "license_number", unique: true })
  licenseNumber?: string;

  @Column({ type: "text" })
  address?: string;

  @Column({ length: 30 })
  city?: string;
  
  @Column({ length: 25 })
  state?: string;

  @Column({ length: 15 })
  country?: string;

  @Column({ length: 6 })
  pincode?: string;

  @Column({ type: "text", nullable: true })
  terms?: string;

  @Column({ nullable: true, name:"logo_url", length:50 })
  logoURL?: string;

  @Column({ nullable: true, name:"signature_url", length:50 })
  signatureURL?: string;

  @Column({ unique: true })
  mobile?: string;

  @Column({ length: 120 })
  email?: string;

  @Column({ default: false, name:"is_approved" })
  isApproved?: boolean;

  @Column({ default: true, name:"is_active" })
  isActive?: boolean;

  @Column({ nullable: true, name:"approve_reject_by", length:25 })
  approveRejectBy?: string;

  @Column({ type: "timestamptz", nullable: true, name:"approve_reject_date" })
  approveRejectDate?: Date;

  @Column({ length: 100, name:"approve_reject_comments", nullable: true })
  approveRejectComments?: string;

  @CreateDateColumn({ type: "timestamptz", name:"create_date" })
  createDate?: Date;

  @UpdateDateColumn({ type: "timestamptz", name:"update_date" })
  updateDate?: Date;

  @Column({ nullable: true, name:"updated_by", length:25})
  updatedBy?: string;

  // Relations
  @OneToMany(() => DoctorPatient, (dp : DoctorPatient) => dp.doctor)
  doctorPatients?: DoctorPatient[];

  @OneToMany(() => DoctorMedicine, (dm : DoctorMedicine) => dm.doctor)
  doctorMedicines?: DoctorMedicine[];

  @OneToMany(() => DiagnosisMedicine, (dm : DiagnosisMedicine) => dm.doctor)
  diagnosisMedicines?: DiagnosisMedicine[];

  @OneToMany(() => Prescribe, (p : Prescribe) => p.doctor)
  prescriptions?: Prescribe[];

  @OneToMany(() => BillingPlan, (bp : BillingPlan) => bp.doctor)
  billingPlans?: BillingPlan[];

  @OneToMany(() => BillingPayment, (bp : BillingPayment) => bp.doctor)
  billingPayments?: BillingPayment[];
} 