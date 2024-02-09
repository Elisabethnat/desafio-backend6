import { Router } from "express";
import usersController from "../controllers/users.controller.js";

const userRouter = Router();
//Ruta para obtener usuarios
userRouter.get('/', usersController.userGet);
//Ruta para crear usuarios con passport
  
export default userRouter;