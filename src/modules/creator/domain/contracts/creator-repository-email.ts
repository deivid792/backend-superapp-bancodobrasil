import { creatorInput } from "../entities/creator-entities";

export interface creatorRepository{
  findByEmail(email:string):Promise<creatorInput|null>
  create(data: creatorInput):Promise<void>
}
