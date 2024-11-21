/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { use, useEffect, useState } from "react";
import { Event, events, Guest } from "core";
import { DashboardEvent } from "@/components/event/DashboardEvent";
import { FormPasswordEvent } from "@/components/event/FormPasswordEvent";


export default function AdminEvent(props: any) {
  console.log(props.params)
  const params: any = use(props.params);
  const id = params.todos[0];
  const [event, setEvent] = useState<Event | null>(null);
  const [password] = useState<string | null>(params.todos[1] ?? null);

  const present = event?.convidados.filter((guest) => guest.confirmado) ?? [];
  const absent = event?.convidados.filter((guest) => guest.confirmado) ?? [];
  const total =
    present?.reduce((total: number, guest: Guest) => {
      return total + guest.qtdeAcompanhantes + 1;
    }, 0) ?? 0;

  function loadEvent() {
    const event = events.find(
      (event) => event.id === id && event.senha === password
    );
    setEvent(event ?? null);
  }

  useEffect(() => {
    loadEvent();
  }, [id, password]);

  return (
    <div className="flex flex-col items-center">
      {event ? (
        <DashboardEvent
          event={event}
          present={present}
          absent={absent}
          total={total}
        />
      ) : (
        <FormPasswordEvent />
      )}
    </div>
  );
}
