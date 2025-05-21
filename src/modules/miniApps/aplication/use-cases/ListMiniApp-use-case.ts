import { ListMiniAppsInput } from "../../domain/DTO/listMiniApp-input-DTO";
import { miniappsRepository } from "../../infrastructure/repositories/prisma-listMiniApps-repository";

export const listMiniAppsUseCase = async (data:ListMiniAppsInput) => {
  const offset = (data.page -1)*data.limit

   return await miniappsRepository.findMany({
    offset,
    limit: data.limit,
    name: data.name,
  });
}
