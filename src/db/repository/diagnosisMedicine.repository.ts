import { IDiagnosisMedicine } from "../../interface";
import { AppDataSource } from "../db";
import { DiagnosisMedicine } from "../entity";

export class DiagnosisMedicineRepository {
    private get repo() {
        return AppDataSource.getRepository(DiagnosisMedicine);
    }

    async findAll(): Promise<IDiagnosisMedicine[]> {
        return await this.repo.find();
    }

    async findById(id: string): Promise<IDiagnosisMedicine | null> {
        return await this.repo.findOneBy({ id });
    }

    async create(diagnosisMedicine: IDiagnosisMedicine): Promise<IDiagnosisMedicine> {
        const entity = this.repo.create(diagnosisMedicine);
        return await this.repo.save(entity);
    }

    async update(id: string, diagnosisMedicine: IDiagnosisMedicine): Promise<IDiagnosisMedicine | null> {
        diagnosisMedicine.id = id;
        const entity = this.repo.create(diagnosisMedicine);
        return await this.repo.save(entity);
    }

    async delete(id: string): Promise<void> {
        await this.repo.delete(id);
    }
}