import { Request, Response } from "express";
import { patientRepository } from "../db/repository";

class PatientController {
    async findAll(_req: Request, res: Response) {
        try {
            const result = await patientRepository.findAll();
            res.json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async findById(req: Request, res: Response) {
        try {
            const id = String(req.params.id);
            const result = await patientRepository.findById(id);
            res.json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async create(req: Request, res: Response) {
        try {
            const result = await patientRepository.create(req.body);
            res.json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async update(req: Request, res: Response) {
        try {
            const id = String(req.params.id);
            const result = await patientRepository.update(id, req.body);
            res.json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const id = String(req.params.id);
            await patientRepository.delete(id);
            res.json({ message: "Deleted successfully" });
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

export const patientController = new PatientController();