import { Request, Response } from "express";
import { prescribeRepository } from "../db/repository";

class PrescribeController {
    async findAll(_req: Request, res: Response) {
        try {
            const result = await prescribeRepository.findAll();
            res.json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async findById(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const result = await prescribeRepository.findById(id);
            res.json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async create(req: Request, res: Response) {
        try {
            const result = await prescribeRepository.create(req.body);
            res.json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async update(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const result = await prescribeRepository.update(id, req.body);
            res.json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const id = req.params.id;
            await prescribeRepository.delete(id);
            res.json({ message: "Deleted successfully" });
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

export const prescribeController = new PrescribeController();