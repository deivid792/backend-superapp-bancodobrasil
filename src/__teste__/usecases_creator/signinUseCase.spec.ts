import { SigninUseCase } from "../../modules/creator/aplication/use-cases/signin-creator-use-case"

describe("signinUseCase", () => {
  it("deve autenticar um criador com credenciais válidas", async () => {
    const result = await SigninUseCase({
      email: "teste@teste.com",
      password: "123456",
    });

    expect(result).toHaveProperty("token");
    expect(result).toHaveProperty("user");
    expect(result.creator).toHaveProperty("id");
    expect(result.creator.email).toBe("teste@teste.com");
  });

  it("deve lançar erro se o email não existir", async () => {
    await expect(
      SigninUseCase({
        email: "naoexiste@teste.com",
        password: "123456",
      })
    ).rejects.toThrow("Usuário não encontrado");
  });

  it("deve lançar erro se a senha estiver incorreta", async () => {
    await expect(
      SigninUseCase({
        email: "teste@teste.com",
        password: "senhaerrada",
      })
    ).rejects.toThrow("Senha inválida");
  });
});
