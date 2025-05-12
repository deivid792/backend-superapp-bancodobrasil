import { z } from "zod";

export const permissionEnum = z.enum([
  'NOTIFICATION',
  'CAMERA',
  'LOCATION',
  'PAYMENTS',
  'FILES'
])
export type Permission = z.infer <typeof permissionEnum>
