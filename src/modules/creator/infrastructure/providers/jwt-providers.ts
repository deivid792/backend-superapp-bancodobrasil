import Jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET as string

export const generateJWT = (uuid:string) => {
  return Jwt.sign({uuid}, secret)
}
