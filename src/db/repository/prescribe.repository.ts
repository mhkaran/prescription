import { IPrescribe } from "../../interface";
import { AppDataSource } from "../db";
import { Prescribe } from "../entity";

export class PrescribeRepository {
    private get repo() {
        return AppDataSource.getRepository(Prescribe);
    }

    async findAll(): Promise<IPrescribe[]> {
        return await this.repo.find();
    }

    async findById(id: string): Promise<IPrescribe | null> {
        return await this.repo.findOneBy({ id });
    }

    async create(prescribe: IPrescribe): Promise<IPrescribe> {
        const entity = this.repo.create(prescribe);
        return await this.repo.save(entity);
    }

    async update(id: string, prescribe: IPrescribe): Promise<IPrescribe | null> {
        prescribe.id = id;
        const entity = this.repo.create(prescribe);
        return await this.repo.save(entity);
    }

    async delete(id: string): Promise<void> {
        await this.repo.delete(id);
    }
}