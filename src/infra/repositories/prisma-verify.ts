import { prisma } from "../dataBase/prisma";

export async function findUserByID(id:string){
  return prisma.creator.findUnique({where:{id}})
}
