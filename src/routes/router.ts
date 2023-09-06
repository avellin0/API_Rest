import { Router } from "express";
const rota = Router()

import { CreateUser } from "../Controller/CreateUser"
import { FindManyUsers } from "../Controller/FindManyUsers"

const Create_new_user = new CreateUser()
const Find_all_users = new FindManyUsers()

rota.post('/user', Create_new_user.handle)

rota.get('/users', Find_all_users.handle)

export { rota }