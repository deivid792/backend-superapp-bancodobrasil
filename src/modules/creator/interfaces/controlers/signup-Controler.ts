import {singnupSchema, signupInput } from "../validators/zod/creatorSignup"
import { error } from "console";
import { Request, Response } from "express";
  import { signupUseCase } from "../../aplication/use-cases/signup-creator-use-cases";

export const signupControler = async (req: Request, res: Response): Promise<void> =>{

  const safeData = singnupSchema.safeParse(req.body)

  if(!safeData.success){
     res.status(400).json({error: safeData.error.flatten().fieldErrors})
     return
  }
  try {
    const saveData = await signupUseCase(safeData.data);
    res.json({ success: true, data: saveData });
  } catch (err) {
    res.status(400).json({ error: err });
  }


}
