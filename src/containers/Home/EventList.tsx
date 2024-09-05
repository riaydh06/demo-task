import { useEvents } from '@hooks/useEvents';
import EventItem from './EventItem';

function EventList() {
  const { events } = useEvents({ isOnMount: true });
  return (
    <div>
      {events.map((event) => (
        <div key={event.id} className="mb-5">
          <EventItem event={event} />
        </div>
      ))}
    </div>
  );
}

export default EventList;
