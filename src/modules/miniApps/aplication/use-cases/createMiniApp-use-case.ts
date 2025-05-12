import { creatMiniApp, findByName } from "../../infrastructure/repositories/prisma-creatMiniApp-repository";
import { randomUUID } from "crypto";
import { registerMiniAppDTO } from "../../domain/DTO/miniApp-input-DTO";

export async function registerMiniApp (data:registerMiniAppDTO) {

const validateNameMiniApp = await findByName(data.name)

if(validateNameMiniApp) throw new Error('Esse nome já está sendo ultilizado em outro miniApp')

const generateID = randomUUID()

const miniApp = creatMiniApp({
    id: generateID,
    name : data.name,
    description: data.description,
    version: data.version,
    entrypointUrl: data.entrypointUrl,
    iconUrl : data.iconUrl,
    repositoryUrl: data.repositoryUrl,
    category: data.category,
    permissions: data.permissions,
    creatorId:  data.creatorId,
  }
)

return miniApp




}
