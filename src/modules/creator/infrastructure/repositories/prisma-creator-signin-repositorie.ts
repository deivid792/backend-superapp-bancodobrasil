import { prisma } from "../../../../infra/dataBase/prisma";

export async function findUserByEmail(email:string){
  return prisma.creator.findUnique({where:{email}})
}


