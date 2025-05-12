import { Request } from "express";

export type extendRequest = Request & {
  userId? : string
}
