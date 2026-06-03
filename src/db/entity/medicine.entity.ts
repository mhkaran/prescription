import {
  Entity,
  Column,
  OneToMany,
  JoinColumn,
  PrimaryGeneratedColumn
} from "typeorm";
import { DiagnosisMedicine } from "./diagnosisMedicine.entity";

@Entity("medicine")
export class Medicine {
  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @Column({ nullable: true, length:50 })
  brand?: string;

  @Column({length:150})
  name?: string;

  @OneToMany(() => DiagnosisMedicine, (dm : DiagnosisMedicine) => dm.medicine)
  diagnosisMedicines?: DiagnosisMedicine[];
}