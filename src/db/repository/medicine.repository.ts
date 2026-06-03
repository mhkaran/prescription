import { IMedicine } from "../../interface";
import { AppDataSource } from "../db";
import { Medicine } from "../entity";

export class MedicineRepository {
    private get repo() {
        return AppDataSource.getRepository(Medicine);
    }

    async findAll(): Promise<IMedicine[]> {
        return await this.repo.find();
    }

    async findById(id: string): Promise<IMedicine | null> {
        return await this.repo.findOneBy({ id });
    }

    async create(medicine: IMedicine): Promise<IMedicine> {
        const entity = this.repo.create(medicine);
        return await this.repo.save(entity);
    }

    async update(id: string, medicine: IMedicine): Promise<IMedicine | null> {
        medicine.id = id;
        const entity = this.repo.create(medicine);
        return await this.repo.save(entity);
    }

    async delete(id: string): Promise<void> {
        await this.repo.delete(id);
    }
}