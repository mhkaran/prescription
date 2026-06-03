import { IPrescribeMedicine } from "../../interface";
import { AppDataSource } from "../db";
import { PrescribeMedicine } from "../entity";

export class PrescribeMedicineRepository {
    private get repo() {
        return AppDataSource.getRepository(PrescribeMedicine);
    }

    async findAll(): Promise<IPrescribeMedicine[]> {
        return await this.repo.find();
    }

    async findById(id: string): Promise<IPrescribeMedicine | null> {
        return await this.repo.findOneBy({ id });
    }

    async create(prescribeMedicine: IPrescribeMedicine): Promise<IPrescribeMedicine> {
        const entity = this.repo.create(prescribeMedicine);
        return await this.repo.save(entity);
    }

    async update(id: string, prescribeMedicine: IPrescribeMedicine): Promise<IPrescribeMedicine | null> {
        prescribeMedicine.id = id;
        const entity = this.repo.create(prescribeMedicine);
        return await this.repo.save(entity);
    }

    async delete(id: string): Promise<void> {
        await this.repo.delete(id);
    }
}