import { IDoctorPatient } from "../../interface";
import { AppDataSource } from "../db";
import { DoctorPatient } from "../entity";

export class DoctorPatientRepository {
    private get repo() {
        return AppDataSource.getRepository(DoctorPatient);
    }

    async findAll(): Promise<IDoctorPatient[]> {
        return await this.repo.find();
    }

    async findById(id: string): Promise<IDoctorPatient | null> {
        return await this.repo.findOneBy({ id });
    }

    async create(doctorPatient: IDoctorPatient): Promise<IDoctorPatient> {
        const entity = this.repo.create(doctorPatient);
        return await this.repo.save(entity);
    }

    async update(id: string, doctorPatient: IDoctorPatient): Promise<IDoctorPatient | null> {
        doctorPatient.id = id;
        const entity = this.repo.create(doctorPatient);
        return await this.repo.save(entity);
    }

    async delete(id: string): Promise<void> {
        await this.repo.delete(id);
    }
}