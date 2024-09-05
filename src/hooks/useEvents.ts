import { useDispatch } from 'react-redux';
import { useAppSelector } from '@helpers/redux';
import { getEventsState } from '@selectors/events-selector';
import { EventsState } from '@reducers/types/event-state';
import { useEffect } from 'react';
import { createEventRequest } from '@reducers/events/create-event-reducer';
import { getEventsRequest } from '@reducers/events/get-events-reducer';
import { EventsType } from '@type/events';

interface UseEvents {
  createRequested: boolean;
  createSuccess: boolean;
  events: EventsType[];
  createEvents: (event: EventsType) => void;
}

export const useEvents = (): UseEvents => {
  const dispatch = useDispatch();
  const { getEvents, createEvent } =
    useAppSelector<EventsState>(getEventsState);

  const createRequested = Boolean(createEvent.request);
  const createSuccess = Boolean(createEvent.success);
  const events = getEvents.data || [];

  useEffect(() => {
    dispatch(getEventsRequest({}));
  }, [dispatch]);

  const createEvents = (event: EventsType) =>
    dispatch(createEventRequest(event));

  return {
    createRequested,
    createSuccess,
    events: events,
    createEvents,
  };
};
