import express from "express"
import { rota } from "./routes/router"
const app = express()

app.use(rota)
app.use(express.json())

app.listen(
    process.env.PORT || 3333,
    () => {
        console.log("Entrou!");
    })