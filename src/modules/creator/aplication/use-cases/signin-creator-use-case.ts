import { compare } from "bcrypt-ts";
import { signinInputDTO } from "../../domain/DTO/signin-creator-input";
import { findUserByEmail } from "../../infrastructure/repositories/prisma-creator-signin-repositorie";
import { generateJWT } from "../../infrastructure/providers/jwt-providers";

export async function SigninUseCase (data:signinInputDTO) {

  const creator = await findUserByEmail(data.email)
  if(!creator){
    throw new Error('Acesso negado')
  }

  const verifyPass = await compare(data.password,creator.password)
  if(!verifyPass){
    throw new Error('Acesso negado')
  }

  const token = generateJWT(creator.id)

  return {creator, token}




}




