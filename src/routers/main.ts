import { Router } from "express";
import * as pingControler from "../modules/creator/interfaces/controlers/ping";
import * as creatorSignupControler from "../modules/creator/interfaces/controlers/signup-Controler"
import * as creatorSigninControler from "../modules/creator/interfaces/controlers/signin-Controler"
import {verifyJWT} from "../infra/http/middlewares/autenticate"
import * as miniAPPControler from "../modules/miniApps/interfaces/controlers/miniApp-controller"
import * as listMiniAppControler from "../modules/miniApps/interfaces/controlers/listMiniApps-controles"
import * as getMiniAppById from "../modules/miniApps/interfaces/controlers/getMiniAppById-controler"
import * as deleteMiniApp from "../modules/miniApps/interfaces/controlers/deleteMiniApp-controler"
export const mainRouter = Router()

mainRouter.get('/ping', pingControler.ping)

mainRouter.post('/creator/signup', creatorSignupControler.signupControler)

mainRouter.post('/creator/signin', creatorSigninControler.signinController)

 mainRouter.post('/miniApps', verifyJWT , miniAPPControler.miniappControler)

mainRouter.get('/miniApps', verifyJWT, listMiniAppControler.listMiniAppsControler)

mainRouter.get('/miniApps/:id', verifyJWT, getMiniAppById.getMiniAppByIdControler)

mainRouter.delete('/miniApps/:id', verifyJWT, deleteMiniApp.deleteMiniAppController )
