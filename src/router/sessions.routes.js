import { Router } from "express";
import passport from "passport";
import { passportError, authorization } from "../utils/messageErrors.js";
import sessionController from "../controllers/sessions.controler.js";

const sessionRouter = Router();
 //Ruta para crear el login del usuario con passport
sessionRouter.post('/login', 
                  passport.authenticate('login'), 
                  sessionController.postSessions);

sessionRouter.post('/register',passport.authenticate('register'), sessionController.registerPost);
 
sessionRouter.get('/current', 
                  passportError('jwt'), 
                  authorization('user'), 
                  sessionController.getCurrentSessions);

sessionRouter.get('/github', 
                  passport.authenticate('github', {scope: ['user:email']}), 
                  sessionController.getGithubCreateUser);

sessionRouter.get('/githubSession', 
                  passport.authenticate('github', {scope: ['user:email']}), 
                  sessionController.getGithubSessions);

sessionRouter.get('/logout', 
                  sessionController.getLogout);

export default sessionRouter;