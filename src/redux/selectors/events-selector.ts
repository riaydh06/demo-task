import { StoreType } from '@reducers/types';
import { EventsState } from '@reducers/types/event-state';

export const getEventsState = (state: StoreType): EventsState => state.events;
