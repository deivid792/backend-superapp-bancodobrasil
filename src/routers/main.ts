import { Router } from "express";
import * as pingControler from "../modules/creator/interfaces/controlers/ping";
import * as creatorControler from "../modules/creator/interfaces/controlers/creatorControles"
import {verifyJWT} from "../infra/http/middlewares/autenticate"
import * as miniAPPControler from "../modules/miniApps/interfaces/controlers/miniApp-controller"
export const mainRouter = Router()

mainRouter.get('/ping', pingControler.ping)

mainRouter.post('/creator/signup', creatorControler.signup)

// mainRouter.post('/creator/signin')

 mainRouter.post('/miniApps', verifyJWT , miniAPPControler.miniappControler)

// mainRouter.get('/miniApps')

//mainRouter.get('/miniApps/:id')

//mainRouter.put('/miniApps/:id')

//mainRouter.delete('/miniApps/:id')
