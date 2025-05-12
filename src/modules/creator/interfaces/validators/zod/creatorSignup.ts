import {z} from "zod"
export const singnupSchema = z.object({
  fullname: z.string({message: 'nome é obrigatório'}).min(2, 'nome precisa de no minimo 2 caracteres'),
  password: z.string({message: 'senha é obrigatória'}).min(4, 'senha precisa de no minimo 4 caracteres'),
  email: z.string({message: 'email é obrigatório'}).email('email inválido'),
  document: z.string({message: 'cpf é obrigatório'}).regex(/^\d{11}$/,'cpf precisa 11 dígitos numéricos'),
  cnpj: z.string({}).regex(/^\d{14}$/)

})

export type signupInput = z.infer<typeof singnupSchema>
