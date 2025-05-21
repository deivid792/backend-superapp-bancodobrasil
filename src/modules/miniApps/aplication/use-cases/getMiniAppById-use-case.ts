import { getMiniAppByIdRepository } from "../../infrastructure/repositories/prisma-getMiniAppById-repository";
import { getMiniAppByIdInputDTO } from "../../domain/DTO/getMiniAppById-input-DTO";

export const getMiniAppByIdUseCase = async (data:getMiniAppByIdInputDTO) =>{

  const miniApp = await getMiniAppByIdRepository.getById(data.id)

  if(!miniApp){
     throw new Error("miniApp não encontrado")
  }

  return miniApp

}
