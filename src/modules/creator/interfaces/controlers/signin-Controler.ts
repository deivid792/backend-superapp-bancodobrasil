import { Request, Response } from "express";
import { signinSchema } from "../validators/creatorSignin";
import { SigninUseCase } from "../../aplication/use-cases/signin-creator-use-case";

export const signinController = async (req: Request, res: Response): Promise <void> => {

  const safeData = signinSchema.safeParse(req.body)

  if (!safeData.success){
    res.status(400).json({error: safeData.error.flatten().fieldErrors})
     return
  }
  try{
    const loginCreator = await SigninUseCase(safeData.data)
    res.json({sucess:true, data: loginCreator })

  }catch (err) {
    res.status(400).json({ error: err });
  }



}
