import { Request, Response } from "express";
import { prisma } from "../database/Client";

export class CreateUser {
    async handle(req: Request, res: Response) {
        const { name, email } = req.body;

        const newUser = await prisma.user.create({
            data: {
                name,
                email
            }
        })
        
        res.status(201).json(newUser)
    }
}