import {
  Entity,
  Column,
  ManyToOne,
  CreateDateColumn,
  JoinColumn,
  PrimaryGeneratedColumn
} from "typeorm";
import { Doctor } from "./doctor.entity";

@Entity("doctor_medicine")
export class DoctorMedicine {
  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @ManyToOne(() => Doctor, (doctor) => doctor.doctorMedicines, { onDelete: "CASCADE" })
  @JoinColumn({ name: "doctor_id" })
  doctor?: Doctor;

  @Column({ length:150 })
  name?: string;

  @Column({ nullable: true, length:50 })
  brand?: string;

  @CreateDateColumn({ type: "timestamptz", name:"create_date" })
  createDate?: Date;
}