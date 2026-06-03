import { IDoctor } from "../../interface";
import { AppDataSource } from "../db";
import { Doctor } from "../entity";

export class DoctorRepository {

    private get repo() {
        return AppDataSource.getRepository(Doctor);
    }

    async findAll(condition?: { where: any; }): Promise<IDoctor[]> {
        return await this.repo.find({
            where: condition?.where
        });
    }

    async findById(id: string): Promise<IDoctor | null> {
        return await this.repo.findOneBy({ id:id });
    }

    async create(doctor: IDoctor): Promise<IDoctor> {
        const entity = this.repo.create(doctor);
        return await this.repo.save(entity);
    }

    async update(id: string, doctor: IDoctor){
       return await this.repo.update(id, doctor);
    }

    async delete(id: string): Promise<void> {
        await this.repo.delete(id);
    }
}