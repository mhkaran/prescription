import { Request, Response } from "express";
import { prescribeMedicineRepository } from "../db/repository";

class PrescribeMedicineController {
    async findAll(_req: Request, res: Response) {
        try {
            const result = await prescribeMedicineRepository.findAll();
            res.json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async findById(req: Request, res: Response) {
        try {
            const id = String(req.params.id);
            const result = await prescribeMedicineRepository.findById(id);
            res.json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async create(req: Request, res: Response) {
        try {
            const result = await prescribeMedicineRepository.create(req.body);
            res.json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async update(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const result = await prescribeMedicineRepository.update(id, req.body);
            res.json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const id = req.params.id;
            await prescribeMedicineRepository.delete(id);
            res.json({ message: "Deleted successfully" });
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

export const prescribeMedicineController = new PrescribeMedicineController();