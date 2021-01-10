import { Publisher, Subjects, TicketCreatedEvent } from '@etytickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
