import { IPatient } from "../../interface";
import { AppDataSource } from "../db";
import { Patient } from "../entity";

export class PatientRepository {
    private get repo() {
        return AppDataSource.getRepository(Patient);
    }
    async findAll(): Promise<IPatient[]> {
        return await this.repo.find();
    }

    async findById(id: string): Promise<IPatient | null> {
        return await this.repo.findOneBy({ id });
    }

    async create(patient: IPatient): Promise<IPatient> {
        const entity = this.repo.create(patient);
        return await this.repo.save(entity);
    }

    async update(id: string, patient: IPatient): Promise<IPatient | null> {
        patient.id = id;
        const entity = this.repo.create(patient);
        return await this.repo.save(entity);
    }

    async delete(id: string): Promise<void> {
        await this.repo.delete(id);
    }
}