import { EventType } from '../../../types/events';
import { ReduxRequest } from './redux-request';

export interface CreateEventState extends ReduxRequest<EventType> {}

export interface GetEventsState extends ReduxRequest<EventType[]> {}

export interface EventsState {
  createEvent: CreateEventState;
  getEvents: GetEventsState;
}
