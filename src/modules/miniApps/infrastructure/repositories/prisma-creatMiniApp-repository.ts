import { prisma } from "../../../../infra/dataBase/prisma";

export const findByName = async (name:string) =>{
  return prisma.miniApps.findUnique({where:{name}})
}

export const creatMiniApp = async (data: any ) =>{
  return prisma.miniApps.create({data})
}
