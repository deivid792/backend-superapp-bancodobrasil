import { error } from "console";
import { getMiniAppByIdUseCase } from "../../aplication/use-cases/getMiniAppById-use-case";
import { Request, Response } from "express";

export const getMiniAppByIdControler = async (req: Request, res: Response): Promise <void> =>{
  try{
  const {id} = req.params

  const miniApp = await getMiniAppByIdUseCase({id})
    res.status(200).json(miniApp)
  }
  catch(err){
    res.status(404).json({error:err})

  }
}
