import { IDoctorMedicine } from "../../interface";
import { AppDataSource } from "../db";
import { DoctorMedicine } from "../entity";

export class DoctorMedicineRepository {
    private get repo() {
        return AppDataSource.getRepository(DoctorMedicine);
    }

    async findAll(): Promise<IDoctorMedicine[]> {
        return await this.repo.find();
    }

    async findById(id: string): Promise<IDoctorMedicine | null> {
        return await this.repo.findOneBy({ id });
    }

    async create(doctorMedicine: IDoctorMedicine): Promise<IDoctorMedicine> {
        const entity = this.repo.create(doctorMedicine);
        return await this.repo.save(entity);
    }

    async update(id: string, doctorMedicine: IDoctorMedicine): Promise<IDoctorMedicine | null> {
        doctorMedicine.id = id;
        const entity = this.repo.create(doctorMedicine);
        return await this.repo.save(entity);
    }

    async delete(id: string): Promise<void> {
        await this.repo.delete(id);
    }
}