
import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn
} from "typeorm";
import { Prescribe } from "./prescribe.entity";

@Entity("prescribe_medicine")
export class PrescribeMedicine {
  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @ManyToOne(() => Prescribe, (prescribe : Prescribe) => prescribe.medicines, { onDelete: "CASCADE" })
  @JoinColumn({ name: "prescribe_id" })
  prescribe?: Prescribe;

  @Column({ length:100 })
  name?: string;

  @Column({ length:50, nullable:true })
  usage?: string ;

  @Column({ type: "smallint", nullable: true })
  days?: number;

  @Column({ length:20, nullable: true })
  dose?: string;

  @Column({ default: false })
  report?: boolean;

  @Column({ nullable: true, length:100 })
  comment?: string;
}