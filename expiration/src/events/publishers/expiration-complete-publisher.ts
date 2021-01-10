import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@etytickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
