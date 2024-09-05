import { EventsType } from '../../../types/events';
import { ReduxRequest } from './redux-request';

export interface CreateEventState extends ReduxRequest<EventsType> {}

export interface GetEventsState extends ReduxRequest<EventsType[]> {}

export interface EventsState {
  createEvent: CreateEventState;
  getEvents: GetEventsState;
}
