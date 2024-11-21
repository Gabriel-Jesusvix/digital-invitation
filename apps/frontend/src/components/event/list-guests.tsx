import { Guest } from "@/core";
import GuestItem from "./guest-item";

export interface ListaConvidadosProps {
  guest: Guest[];
}

export default function ListGuests({ guest}: ListaConvidadosProps) {
  return (
    <div>
      <ul className="flex flex-col gap-2">
        {guest.map((guest) => (
          <GuestItem key={guest.id} guest={guest} />
        ))}
      </ul>
    </div>
  );
}
