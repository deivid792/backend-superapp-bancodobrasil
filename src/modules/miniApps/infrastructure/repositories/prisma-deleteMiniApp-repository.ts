import { prisma } from "../../../../infra/dataBase/prisma";

export const deleteMiniAppRepository = {verifyMiniApp: async(id:string) =>{
  return await prisma.miniApps.findUnique({where: {id}})
},
  deleteMiniapp: async (id:string) =>{
  return await prisma.miniApps.delete({where: {id}})

}}
