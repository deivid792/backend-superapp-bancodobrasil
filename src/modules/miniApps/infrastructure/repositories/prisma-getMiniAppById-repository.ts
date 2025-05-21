import { prisma } from "../../../../infra/dataBase/prisma";

export const getMiniAppByIdRepository = { getById: async (id:string) => {
  return await prisma.miniApps.findUnique({where:{id}}) }

}
