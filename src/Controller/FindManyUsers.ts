import { Request, Response } from "express";
import { prisma } from "../database/Client";

export class FindManyUsers {
    async handle(req: Request, res: Response) {

        const AllUsers = await prisma.user.findMany()

        res.status(201).json(AllUsers)
    }
}