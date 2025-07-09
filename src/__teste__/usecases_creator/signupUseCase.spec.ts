import { signupUseCase } from "../../modules/creator/aplication/use-cases/signup-creator-use-cases";


describe("signupUseCase", () => {
  it("deve cadastrar um criador com dados válidos", async () => {
    const result = await signupUseCase({
      fullname: "testador",
      document: "12345678900",
      cnpj: "93969399936693",
      email: "teste@teste.com",
      password: "123456",
    },);

    expect(result).toHaveProperty("createToken");
    expect(result).toHaveProperty("createdUser");
    expect(result.createdUser).toHaveProperty("id");
    expect(result.createdUser.email).toBe("teste@teste.com");
  });
});
