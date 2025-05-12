import {TypeOf, z} from "zod"

export const categoryEnum = z.enum([
  'FINANCE',
  'EDUCATION',
  'LASER',
  'COMIDA',
  'OUTROS'
])

export type Category = z.infer<typeof categoryEnum>;
