import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn
} from "typeorm";
import { Doctor } from "./doctor.entity";
import { BillingPlan } from "./billingPlan.entity";

@Entity("billing_payment")
export class BillingPayment {
  @PrimaryGeneratedColumn("uuid")  
  id?: string;

  @ManyToOne(() => Doctor, (dr: Doctor) => dr.billingPayments)
  @JoinColumn({ name: "doctor_id" })
  doctor?: Doctor;

  @ManyToOne(() => BillingPlan)
  @JoinColumn({ name: "billing_plan_id" })
  billingPlan?: BillingPlan;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  amount?: string;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  tax?: string;

  @Column({ type: "text", name:"billable_prescription_record" })
  billablePrescriptionRecord?: string;

  @Column({ type: "text", name:"non_billable_prescription_record" })
  nonBillablePrescriptionRecord?: string;

  @Column({name: "payment_reference",  length:200})
  paymentReference?: string;

  @Column({ type: "timestamptz", nullable: true, name:"create_date" })
  createDate?: Date;

  @Column({ type: "timestamptz", nullable: true, name:"payment_date" })
  paymentDate?: Date;
}