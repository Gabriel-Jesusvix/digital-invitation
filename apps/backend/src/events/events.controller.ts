import { Controller, Get } from '@nestjs/common';
import * as Core from 'core';

@Controller('/events')
export class EventsController {
  @Get()
  async getEvents() {
    return Core.events.map(this.serialize);
  }

  private serialize(event: Core.Event) {
    return {
      ...event,
      data: Core.Data.formatar(event.data),
    };
  }

  private deserilize(event: any): Core.Event {
    return {
      ...event,
      data: Core.Data.unformat(event.data),
    };
  }
}
