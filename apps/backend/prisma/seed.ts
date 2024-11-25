import { PrismaClient } from '@prisma/client';
import { events } from 'core/src/constants/events';

async function seed() {
  const prisma = new PrismaClient();

  const transactions = events.map(async (event) => {
    await prisma.event.create({
      data: {
        id: event.id,
        alias: event.alias,
        password: event.senha,
        name: event.nome,
        data: event.data,
        local: event.local,
        description: event.descricao,
        image: event.imagem,
        imageBackground: event.imagemBackground,
        expectedAudience: event.publicoEsperado,
        guests: {
          create: event.convidados.map((guest) => ({
            id: guest.id,
            name: guest.nome,
            email: guest.email,
            confirmed: guest.confirmado,
            hasCompanions: guest.possuiAcompanhantes,
            quantityCompanions: guest.qtdeAcompanhantes,
          })),
        },
      },
    });
  });

  await Promise.all(transactions);
}

seed();
