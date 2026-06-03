import { IBillingPayment } from "../../interface";
import { AppDataSource } from "../db";
import { BillingPayment } from "../entity";

export class BillingPaymentRepository {
    
    private get repo() {
        return AppDataSource.getRepository(BillingPayment);
    }

    async findAll(): Promise<IBillingPayment[]> {
        return await this.repo.find();
    }

    async findById(id: string): Promise<IBillingPayment | null> {
        return await this.repo.findOneBy({ id });
    }

    async create(billingPayment: IBillingPayment): Promise<IBillingPayment> {
        return await this.repo.save(billingPayment);
    }

    async update(id: string, billingPayment: IBillingPayment): Promise<IBillingPayment | null> {
        billingPayment.id = id;
        return await this.repo.save(billingPayment);
    }

    async delete(id: string): Promise<void> {
        await this.repo.delete(id);
    }
}