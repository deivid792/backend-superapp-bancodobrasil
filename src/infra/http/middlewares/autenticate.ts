import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken"
import { any } from "zod";
import { extendRequest } from "../../../interfaces/http/types/express-types";
import { findUserByID } from "../../repositories/prisma-verify";

export const verifyJWT = async (req: extendRequest, res: Response, Next: NextFunction): Promise<void> =>{
      const authHeader = req.headers['authorization']
      if(! authHeader) {
        res.status(404).json({error :'Acesso negado'})
        return
      }


      const token = authHeader.split(' ')[1]

      jwt.verify(
        token,
        process.env.JWT_SECRET as string,
        async (error, decoded:any) =>{
          if(error) {
            res.status(404).json({error :'Acesso negado'})
            return
          }

          const user = await findUserByID (decoded.id)

          if(!user) {
             res.status(404).json({error :'Acesso negado'})
             return
            }

          req.userId = user.id

          Next()

          }




      )



}
