import jwt from "jsonwebtoken";

const generateJWTToken = (_id: string): string => {
  console.log("************* Inside GenerateJWTToken *************");
  return jwt.sign({ _id }, process.env.JWT_SECRET as string, {
    expiresIn: "30d",
  });
};

export { generateJWTToken };
