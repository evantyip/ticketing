import { Publisher, Subjects, TicketUpdatedEvent } from '@etytickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
