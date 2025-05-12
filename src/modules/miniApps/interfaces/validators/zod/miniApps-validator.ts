import {z} from "zod"
import { categoryEnum} from "./enumCategory"
import { permissionEnum } from "./enumPermissions"

export const miniappsSchema = z.object({
name: z.string({message: 'nome é obrigatório '}).min(2, 'nome precisa de pelo menos 2 caracteres'),
description: z.string({message: 'decrição é obrigatória'}).min(20, 'descrição precisa de pelo menos 20 caracteres').max(250),
version: z.string({message: 'obrigatório informar a versão'}).min(1),
entrypointUrl: z.string({message: 'é obrigatório a url do entrypoint'}).url('url inválido'),
iconUrl: z.string({message: 'é obrigatório a url do icone'}).url('url inválido'),
repositoryUrl: z.string({message: 'é obrigatório a url do repositório'}).url('url inválido'),
category: categoryEnum,
permissions:z.array(permissionEnum).nonempty('pelo menos uma permissão precisa ser selecionada')
})
