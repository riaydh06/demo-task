import { useDispatch } from 'react-redux';
import { useAppSelector } from '@helpers/redux';
import { getEventsState } from '@selectors/events-selector';
import { EventsState } from '@reducers/types/event-state';
import { useEffect } from 'react';
import { createEventRequest } from '@reducers/events/create-event-reducer';
import {
  getEventsRequest,
  sortingByDate,
  sortingByName,
  updateLike,
} from '@reducers/events/get-events-reducer';
import { EventType } from '@type/events';

interface UseEvents {
  createRequested: boolean;
  createSuccess: boolean;
  events: EventType[];
  createEvents: (event: EventType) => void;
  updateLikeAction: (id: string) => void;
  sortByNameAction: () => void;
  sortByDateAction: () => void;
}

export const useEvents = ({
  isOnMount,
}: {
  isOnMount?: boolean;
}): UseEvents => {
  const dispatch = useDispatch();
  const { getEvents, createEvent } =
    useAppSelector<EventsState>(getEventsState);

  const createRequested = Boolean(createEvent.request);
  const createSuccess = Boolean(createEvent.success);
  const events = getEvents.data || [];

  useEffect(() => {
    if (isOnMount) {
      dispatch(getEventsRequest({}));
    }
  }, [dispatch, isOnMount]);

  const createEvents = (event: EventType) =>
    dispatch(createEventRequest(event));

  const updateLikeAction = (id: string) => dispatch(updateLike(id));
  const sortByNameAction = () => dispatch(sortingByName({}));
  const sortByDateAction = () => dispatch(sortingByDate({}));

  return {
    createRequested,
    createSuccess,
    events: events,
    createEvents,
    updateLikeAction,
    sortByDateAction,
    sortByNameAction,
  };
};
