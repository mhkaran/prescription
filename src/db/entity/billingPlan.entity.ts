import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn
} from "typeorm";
import { Doctor } from "./doctor.entity";

@Entity("billing_plan")
export class BillingPlan {
  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @Column()
  name?: string;

  @ManyToOne(() => Doctor, (dr:Doctor) => dr.billingPlans)
  @JoinColumn({ name: "doctor_id" })  
  doctor?: Doctor;

  @Column({ type: "timestamptz", nullable: true, name:"start_date" })
  startDate?: Date;

  @Column({ type: "timestamptz", nullable: true, name:"end_date" })
  endDate?: Date;

  @Column({ default: true, name:"is_active" })
  isActive?: boolean;
}