import { findUserByEmail, createUser } from "../../infrastructure/repositories/prisma-creator-repositorie";
import { creatorInput } from "../../domain/entities/creator-entities";
import { any } from "zod";
import { randomUUID } from "crypto";
import { hash } from "bcrypt-ts";
import { generateJWT } from "../../infrastructure/providers/jwt-providers";

export async function signupUseCase(data:creatorInput){

  const verifyUser = await findUserByEmail(data.email)

  if(verifyUser) throw new Error('Email já cadastrado');

  const uuid = randomUUID()

  const hashedPassword = await hash(data.password, 10)

  const createToken = generateJWT(uuid)

  const createdUser = await createUser({
    id: uuid,
    fullname: data.fullname,
    email: data.email,
    password: hashedPassword,
    document: data.document,
    cnpj: data.cnpj
  })

return {createdUser, createToken}

}


