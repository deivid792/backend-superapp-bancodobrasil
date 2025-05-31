import { z } from "zod";

export const signinSchema = z.object({
   email: z.string({message: 'email é obrigatório'}).email('email inválido'),
   password: z.string({message: 'senha é obrigatória'})
})
