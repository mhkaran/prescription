import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn
} from "typeorm";
import { Doctor } from "./doctor.entity";  
import { Medicine } from "./medicine.entity";

@Entity("diagnosis_medicine")
export class DiagnosisMedicine {
  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @ManyToOne(() => Doctor, (doctor) => doctor.diagnosisMedicines, { onDelete: "CASCADE" })
  @JoinColumn({ name: "doctor_id" })
  doctor?: Doctor;

  @ManyToOne(() => Medicine, (medicine) => medicine.diagnosisMedicines)
  @JoinColumn({ name: "medicine_id" })
  medicine?: Medicine;

  @Column({ length:100, nullable:true })
  name?: string;

  @Column({ length:50, nullable:true })
  usage?: string;

  @Column({ type:"smallint", nullable:true })
  days?: number;

  @Column({ length:20, nullable: true })
  dose?: string;

  @Column({ default: false })
  report?: boolean;
}