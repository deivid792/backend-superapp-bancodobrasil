import { prisma } from "../../../../infra/dataBase/prisma";

export const findByName = async (data:string) =>{
  return prisma.miniApp.findUnique({where: name})
}

export const creatMiniApp = async (data: any ) =>{
  return prisma.miniApps.create({data})
}
