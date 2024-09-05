import { EventsState } from './event-state';
import { UserState } from './user-state';

export interface StoreType {
  user: UserState;
  events: EventsState;
}
