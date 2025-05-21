import { Router } from "express";
import * as pingControler from "../modules/creator/interfaces/controlers/ping";
import * as creatorControler from "../modules/creator/interfaces/controlers/creatorControles"
import {verifyJWT} from "../infra/http/middlewares/autenticate"
import * as miniAPPControler from "../modules/miniApps/interfaces/controlers/miniApp-controller"
import * as listMiniAppControler from "../modules/miniApps/interfaces/controlers/listMiniApps-controles"
import * as getMiniAppById from "../modules/miniApps/interfaces/controlers/getMiniAppById-controler"
import * as deleteMiniApp from "../modules/miniApps/interfaces/controlers/deleteMiniApp-controler"
export const mainRouter = Router()

mainRouter.get('/ping', pingControler.ping)

mainRouter.post('/creator/signup', creatorControler.signup)

// mainRouter.post('/creator/signin')

 mainRouter.post('/miniApps', verifyJWT , miniAPPControler.miniappControler)

mainRouter.get('/miniApps', verifyJWT, listMiniAppControler.listMiniAppsControler)

mainRouter.get('/miniApps/:id', verifyJWT, getMiniAppById.getMiniAppByIdControler)

//mainRouter.put('/miniApps/:id')

mainRouter.delete('/miniApps/:id', verifyJWT, deleteMiniApp.deleteMiniAppController )
