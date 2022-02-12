import express from 'express'
import UserController from '../Controllers/User.controllers.js'

const router = express.Router()

router.route("/").get(UserController.apiGetUser)
.post(UserController.apiPostUser)

export default router