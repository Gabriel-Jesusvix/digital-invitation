import { Id, Password } from "../../shared";
import validateEvent from "./validate-event";
import Event from "../model/Event";

export default function complementaryEvent(
  eventPartial: Partial<Event>
): Event {
  const erros = validateEvent(eventPartial);

  if (erros.length) {
    throw new Error(erros.join("\n"));
  }

  const evento: Event = {
    ...eventPartial,
    id: eventPartial.id ?? Id.new(),
    senha: eventPartial.senha ?? Password.new(20),
    publicoEsperado: +(eventPartial.publicoEsperado ?? 1),
  } as Event;

  return evento;
}
