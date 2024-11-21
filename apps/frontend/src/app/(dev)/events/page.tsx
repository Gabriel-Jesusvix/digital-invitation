import { events } from "@/core/constants";
import Image from "next/image";
import Link from "next/link";
import QRCode from "react-qr-code";

export default function Events() {
  return (
    <div className="grid grid-cols-3 gap-5">
      {events.map((event) => (
        <div
          key={event.id}
          className="flex w-full flex-col bg-zinc-800 rounded-lg  overflow-hidden"
        >
          <div className="relative w-full h-52">
            <Image
              src={event.imagem}
              fill
              alt={event.nome}
              className="object-cover"
            />
          </div>
          <div className="flex flex-col flex-1 p-7 items-center gap-5 text-center">
            <span className="text-lg font-black">{event.nome}</span>
            <p className="flex-1 text-sm text-zinc-400">{event.descricao}</p>
            <QRCode
              value={JSON.stringify({ id: event.id, password: event.senha })}
              className="w-44 h-44"
            />
            <div className="flex gap-5">
              <Link
                href={`/event/admin/${event.id}/${event.senha}`}
                className="flex-1 button red"
              >
                Admin
              </Link>
              <Link
                href={`/invite/${event.alias}`}
                className="flex-1 button green"
              >
                Convite
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
