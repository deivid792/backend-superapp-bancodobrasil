import { extendRequest } from "../../../../interfaces/http/types/express-types";
import { registerMiniApp } from "../../aplication/use-cases/createMiniApp-use-case";
import { miniappsSchema } from "../validators/zod/miniApps-validator";
import { Request, Response } from "express";

export const miniappControler = (req: extendRequest , res:Response): void => {

  const verifyParse = miniappsSchema.safeParse(req.body)

  if(!verifyParse.success){
    res.json({error: verifyParse.error.flatten().fieldErrors})
    return
  }
  const creatorId = req.userId

 if (!creatorId) {
    res.status(401).json({ error: "Usuário não autenticado" });
    return
  }

  const miniAppData = {
    ...verifyParse.data,
    creatorId
  }

  try{
    const saveMiniApp = registerMiniApp(miniAppData)
    res.json({sucess:true, data:saveMiniApp})
  }
  catch{
    res.json({error:''})
  }

}
