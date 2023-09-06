import { Request, Response } from "express";
import { Client } from "../database/Client";

export class FindManyUsers {
    async handle(req: Request, res: Response) {

        const AllUsers = await Client.user.findMany()

        res.status(201).json(AllUsers)
    }
}