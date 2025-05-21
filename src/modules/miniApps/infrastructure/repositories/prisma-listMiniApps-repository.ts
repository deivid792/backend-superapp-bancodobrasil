import { prisma } from "../../../../infra/dataBase/prisma";

export const miniappsRepository = {
  findMany: async ({
    offset,
    limit,
    name,
  }: {
    offset: number;
    limit: number;
    name?: string;
  }) => {
    return await prisma.miniApps.findMany({
      where: name
        ? {
            name: {
              contains: name,
              mode: 'insensitive', // busca sem case sensitive
            },
          }
        : undefined,
      skip: offset,
      take: limit,
      orderBy: {
        createdAt: 'desc', // ou 'asc', depende do que quiser
      },
    });
  },
};
