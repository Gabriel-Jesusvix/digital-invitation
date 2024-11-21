import Guest from "../model/Guest";
import validateGuest from "./validate-guest";

export default function complementaryGuest(
  guest: Partial<Guest>
): Guest {
  const erros = validateGuest(guest);

  if (erros.length > 0) {
    throw new Error(erros.join("\n"));
  }

  const qtdeAcompanhantes = guest.qtdeAcompanhantes ?? 0;
  const temAcompanhantes =
    guest.possuiAcompanhantes &&
    guest.confirmado &&
    qtdeAcompanhantes > 0;

  const convidadoAtualizado = {
    ...guest,
    qtdeAcompanhantes: temAcompanhantes ? qtdeAcompanhantes : 0,
    possuiAcompanhantes: temAcompanhantes,
  };

  return convidadoAtualizado as Guest;
}
