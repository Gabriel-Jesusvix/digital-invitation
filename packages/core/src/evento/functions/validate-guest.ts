import Guest from "../model/Guest";

export default function validateGuest(
  convidado: Partial<Guest>
): string[] {
  const erros: string[] = [];

  if (!convidado.nome) {
    erros.push("Nome é obrigatório");
  }

  if (!convidado.email) {
    erros.push("E-mail é obrigatório");
  }

  return erros;
}
