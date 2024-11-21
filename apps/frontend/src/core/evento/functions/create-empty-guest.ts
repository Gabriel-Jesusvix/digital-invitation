import { Id } from "@/core/shared";
import Guest from "../model/Guest";

export default function createEmptyGuest(): Partial<Guest> {
  return {
    id: Id.new(),
    nome: "",
    email: "",
    confirmado: true,
    possuiAcompanhantes: false,
    qtdeAcompanhantes: 0,
  };
}
