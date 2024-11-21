import Event from '@/core/evento/model/Event'
import Guest from '@/core/evento/model/Guest'

import complementaryGuest from "./functions/complementary-guest"
import complementaryEvent from "./functions/complementary-event";
import createEmptyGuest from "./functions/create-empty-guest";
import createEventEmpty from "./functions/create-event-empty";

export type { Event, Guest };
export {
  complementaryGuest,
  complementaryEvent,
  createEmptyGuest,
  createEventEmpty,
};
