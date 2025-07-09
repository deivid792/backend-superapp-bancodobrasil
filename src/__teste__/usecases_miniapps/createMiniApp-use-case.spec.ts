import { registerMiniApp } from "../../modules/miniApps/aplication/use-cases/createMiniApp-use-case";
import { registerMiniAppDTO } from "../../modules/miniApps/domain/DTO/miniApp-input-DTO";
import * as repository from "../../modules/miniApps/infrastructure/repositories/prisma-creatMiniApp-repository";

const VALID_CATEGORIES = ["FINANCE", "EDUCATION", "LASER", "COMIDA", "OUTROS"] as const;

describe("registerMiniApp", () => {
  it("deve registrar um mini app com dados válidos", async () => {
    const miniAppData: registerMiniAppDTO = {
      name: "MiniApp Teste",
      description: "Descrição do mini app",
      version: "1.0.0",
      entrypointUrl: "https://miniappteste.com",
      iconUrl: "https://miniappteste.com/icon.png",
      repositoryUrl: "https://github.com/usuario/miniappteste",
      categories: [VALID_CATEGORIES[0]],  // "FINANCE"
      permissions: ["CAMERA"],
      creatorId: "uuid-do-criador-123",
    };

    const result = await registerMiniApp(miniAppData);

    expect(result).toHaveProperty("id");
    expect(result.name).toBe(miniAppData.name);
    expect(result.description).toBe(miniAppData.description);
    expect(result.category).toEqual(miniAppData.categories);
  });

  it("deve lançar erro se o nome já estiver em uso", async () => {
    // Aqui você pode mockar findByName para simular que já existe um miniApp com esse nome
    // Por exemplo, se estiver usando Jest:
    // jest.spyOn(prismaRepository, 'findByName').mockResolvedValue({ id: "algum-id" });

    // Exemplo genérico, adapte ao seu mock:
    // await expect(registerMiniApp(miniAppDataDuplicado)).rejects.toThrow('Esse nome já está sendo ultilizado em outro miniApp');
  });
});
