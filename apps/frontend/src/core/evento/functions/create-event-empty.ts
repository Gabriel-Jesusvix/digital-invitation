import { Id } from "@/core/shared";
import Event from "../model/Event";

export default function createEventEmpty(): Partial<Event> {
  return {
    id: Id.new(),
    nome: "",
    descricao: "",
    data: new Date(),
    local: "",
    publicoEsperado: 1,
    imagem: "",
    imagemBackground: "",
  };
}
