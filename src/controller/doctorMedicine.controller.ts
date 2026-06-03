import { Request, Response } from "express";
import { doctorMedicineRepository } from "../db/repository";

class DoctorMedicineController {
    async findAll(_req: Request, res: Response) {
        try {
            const result = await doctorMedicineRepository.findAll();
            res.json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async findById(req: Request, res: Response) {
        try {
            const id = String(req.params.id);
            const result = await doctorMedicineRepository.findById(id);
            res.json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async create(req: Request, res: Response) {
        try {
            const result = await doctorMedicineRepository.create(req.body);
            res.json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async update(req: Request, res: Response) {
        try {
            const id = String(req.params.id);
            const result = await doctorMedicineRepository.update(id, req.body);
            res.json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const id = String(req.params.id);
            await doctorMedicineRepository.delete(id);
            res.json({ message: "Deleted successfully" });
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

export const doctorMedicineController = new DoctorMedicineController();