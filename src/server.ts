import { PrismaClient } from "@prisma/client"
import express from "express"
const app = express()



const prisma = new PrismaClient()

app.get("/users", async () => {
    const user = await prisma.user.findMany()
    
    return { user }
})


app.post("/users", async (request, response) => {

    const { name, email } = request.body

    const user = await prisma.user.create({
        data: {
            name,
            email
        }
    })
    response.status(201).send(user)
})

app.listen(
    process.env.PORT || 3333,
    () => {
        console.log("Entrou!");
    })