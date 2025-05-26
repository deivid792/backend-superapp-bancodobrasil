import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken"
import { any } from "zod";
import { extendRequest } from "../../../interfaces/http/types/express-types";
import { findUserByID } from "../../repositories/prisma-verify";

export const verifyJWT = async (req: extendRequest, res: Response, next: NextFunction): Promise<void> =>{
      const authHeader = req.headers['authorization']
      if(!authHeader) {
        res.status(404).json({error :'Acesso negado'})
        return
      }


      const token = authHeader.split(' ')[1]

      try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { uuid: string };
    const user = await findUserByID(decoded.uuid);

    if (!user) {
      res.status(401).json({ error: 'Usuário não encontrado' });
      return;
    }

    req.userId = user.id;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Token inválido' });
  }
};
