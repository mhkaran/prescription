import { Request, Response } from "express";
import { diagnosisMedicineRepository } from "../db/repository";

class DiagnosisMedicineController {
    async findAll(_req: Request, res: Response) {
        try {
            const result = await diagnosisMedicineRepository.findAll();
            res.json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async findById(req: Request, res: Response) {
        try {
            const id = String(req.params.id);
            const result = await diagnosisMedicineRepository.findById(id);
            res.json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async create(req: Request, res: Response) {
        try {
            const result = await diagnosisMedicineRepository.create(req.body);
            res.json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async update(req: Request, res: Response) {
        try {
            const id = String(req.params.id);
            const result = await diagnosisMedicineRepository.update(id, req.body);
            res.json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const id = String(req.params.id);
            await diagnosisMedicineRepository.delete(id);
            res.json({ message: "Deleted successfully" });
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

export const diagnosisMedicineController = new DiagnosisMedicineController();