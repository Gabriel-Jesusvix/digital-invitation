import { Event } from "core";
import { Info } from "../shared/info";

interface InfoEventProps {
  event: Event;
  className?: string
}
export function InfoEvent({ event, className }: InfoEventProps) {
  return (
    <div className={`flex flex-col gap-2 ${className ?? ""}`}>
      <div className="flex-1 flex items-center gap-4 border border-zinc-800 px-6 py-3 rounded-lg">
        <span className="text-2xl font-black">{event.alias}: </span>
        <span className="text-xl text-zinc-300">{event.nome}</span>
      </div>
      <div className="flex gap-2">
        <Info label="Data:">
          <span>
            {new Date(event.data!).toLocaleDateString()}
            {" às "}
            {new Date(event.data!).toLocaleTimeString()}
          </span>
        </Info>
        <Info label="Local:">{event.local}</Info>
      </div>
      <Info label="Descrição:">{event.descricao}</Info>
    </div>
  );
}
