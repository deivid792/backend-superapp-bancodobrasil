import { Request, Response} from "express";
import { deleteMiniAppUseCase } from "../../aplication/use-cases/deleteMiniApp-use-case";

export const deleteMiniAppController = async (req: Request, res:Response): Promise <void> =>{
  try{
  const {id} = req.params

  const miniApp = deleteMiniAppUseCase({id})
  res.status(200).json("miniApp Excluido")
  }
  catch(err){
    res.status(404).json({error:err})
  }
}
