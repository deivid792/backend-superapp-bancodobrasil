import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.creator.upsert({
    where: { id: '4925e175-2a9d-4910-adba-784fbabc3b7f' },
    update: {},
    create: {
      id: '4925e175-2a9d-4910-adba-784fbabc3b7f',
      fullname: 'Monkey D luffy',
      document: '70909639939',
      cnpj: '93969399936693',
      email: 'monkey_luffy@gmail.com',
      password: '$2b$10$aHRsi6Te.ww.8lYbktTI6OwDDWhtnXvTUEka5o2MHnUNFJtLc5rlm',
      cratedAt: new Date('2025-06-06T01:29:31.799Z'),
      updatedAt: new Date('2025-06-06T01:29:31.799Z'),
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
