import { Category } from "../../interfaces/validators/zod/enumCategory"
import { Permission } from "../../interfaces/validators/zod/enumPermissions"

export interface registerMiniAppDTO {
  name : string
  description: string
  version: string
  entrypointUrl: string
  iconUrl :string
  repositoryUrl: string
  categories: Category
  permissions: Permission[]
  creatorId:  string
}
