import { Request, Response } from "express";
import { listMiniAppsUseCase } from "../../aplication/use-cases/ListMiniApp-use-case";
import { promises } from "dns";

export const listMiniAppsControler = async (req:Request, res:Response ): Promise <void> =>{
  try{
    const page = parseInt(req.query.page as string)||1
    const limit = parseInt(req.query.limit as string)||10
    const name = req.query.name as string| undefined

    const miniAppdata = {page,limit,name}

    const result = await listMiniAppsUseCase(miniAppdata)
    res.status(200).json(result)
  }
  catch(err){
    res.status(500).json({error:'Erro ao listar miniApp', detail: String(err)})
  }
}
