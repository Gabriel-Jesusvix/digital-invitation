import { Event, Guest } from "@/core";
import { InfoEvent } from "./info-event";
import { AccessToQrCode } from "./Access-to-qrcode";
import { Statistic } from "../shared/statistic";
import ListGuests from "./list-guests";

interface DashboardProps {
  event: Event
  present: Guest[]
  absent: Guest[]
  total: number
}
export function DashboardEvent({ event, present,absent, total}: DashboardProps) {

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <InfoEvent 
          event={event}
          className="flex-1"
        />
        <AccessToQrCode event={event}/>
      </div>
      <div className="grid grid-cols-3 gap-6 mt-4">
        <Statistic 
          text="Expectativa de convidados:"
          value={event.publicoEsperado}
          image="/icones/convidados.svg"
        />
        <Statistic 
          text="Confirmações:"
          value={present.length}
          image="/icones/convidados.svg"
        />
        <Statistic 
          text="Total Confirmado:"
          value={total}
          image="/icones/convidados.svg"
        />
      </div>
      <button className="button blue self-end mt-12">
        <span>Atualizar Lista de Convidados</span>
      </button>
      <span className="flex py-2 text-xl font-bold text-white/80">
        Convidados que confimaram PRESENÇA
      </span>
      <ListGuests guest={present} />

      <span className="flex py-2 text-xl font-bold text-white/80">
        Convidados que confirmaram AUSÊNCIA
      </span>
      <ListGuests guest={absent} />
    </div>
  )
}