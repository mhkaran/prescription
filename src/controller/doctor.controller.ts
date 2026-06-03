import { Request, Response } from "express";
import { doctorBusiness } from "../businessLogic";

class DoctorController {
   

    async create(req: Request, res: Response) {
        try {
            await doctorBusiness.create(req.body);
            res.status(201).send("Doctor created successfully");
        } catch (error) {
            res.status(400).json({ error: error instanceof Error ? error.message : error });
        }
    }

    async update(req: Request, res: Response) {
        try {
            await doctorBusiness.update(req.body);
            res.send("Doctor updated successfully");
        } catch (error) {
            res.status(400).json({ error: error instanceof Error ? error.message : error });
        }
    }

    async statusUpdate(req: Request, res: Response) {
        try {
            const result = await doctorBusiness.statusUpdate(req.body);
            res.json(result);
        } catch (error) {
            res.status(400).json({ error: error instanceof Error ? error.message : error });
        }
    }

    async search(req: Request, res: Response) {
        try {
            const result = await doctorBusiness.search(req.body);
            res.json(result);
        } catch (error) {
            res.status(400).json({ error: error instanceof Error ? error.message : error });
        }
    }
    async login(req: Request, res: Response) {
        try {
            const result = await doctorBusiness.login(req.body);
            res.json(result);
        } catch (error) {
            res.status(400).json({ error: error instanceof Error ? error.message : error });
        } 
}

export const doctorController = new DoctorController();