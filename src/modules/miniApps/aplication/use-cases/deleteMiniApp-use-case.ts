import { deleteMiniAppDTO } from "../../domain/DTO/deleteMiniApp-input-DTO";
import { deleteMiniAppRepository } from "../../infrastructure/repositories/prisma-deleteMiniApp-repository";

export const deleteMiniAppUseCase = async (data:deleteMiniAppDTO) =>{
  const miniApp = data.id

  const verifyMiniApp = await deleteMiniAppRepository.verifyMiniApp(miniApp)

  if(!verifyMiniApp){
    throw new Error("miniApp não existe")
  }

  const deleteMiniApp = await deleteMiniAppRepository.deleteMiniapp(miniApp)

  return deleteMiniApp
}
