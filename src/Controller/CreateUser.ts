import { Request, Response } from "express";
import { Client } from "../database/Client";

export class CreateUser {
    async handle(req: Request, res: Response) {
        const { name, email } = req.body;

        const newUser = await Client.user.create({
            data: {
                name,
                email
            }
        })
        
        res.status(201).json(newUser)
    }
}