import { IBillingPlan } from "../../interface"
import { AppDataSource } from "../db";
import { BillingPlan } from "../entity";

export class BillingPlanRepository {
 
    private get repo() {
        return AppDataSource.getRepository(BillingPlan);
    }

    async findAll(): Promise<IBillingPlan[]> {
        return await this.repo.find();
    }

    async findById(id: string): Promise<IBillingPlan | null> {
        return await this.repo.findOneBy({ id });
    }

    async create(billingPlan: IBillingPlan): Promise<IBillingPlan> {
        const entity = this.repo.create(billingPlan);
        return await this.repo.save(entity);
    }

    async update(id: string, billingPlan: IBillingPlan): Promise<IBillingPlan | null> {
        billingPlan.id = id;
        const entity = this.repo.create(billingPlan);
        return await this.repo.save(entity);
    }

    async delete(id: string): Promise<void> {
        await this.repo.delete(id);
    }
}