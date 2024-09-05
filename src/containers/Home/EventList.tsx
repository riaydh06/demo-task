import { useEvents } from '@hooks/useEvents';
import EventItem from './EventItem';
import { Checkbox } from '@pentabd/ui';

function EventList() {
  const { events, sortByDateAction, sortByNameAction } = useEvents({
    isOnMount: true,
  });
  return (
    <div>
      <div>
        <Checkbox
          id="1"
          name="byDate"
          label="Sort By Date"
          controlling
          onChange={(e) => {
            if (e.target.checked) {
              sortByDateAction();
            }
          }}
        />
        <Checkbox
          id="2"
          name="byName"
          label="Sort By Name"
          controlling
          onChange={(e) => {
            if (e.target.checked) {
              sortByNameAction();
            }
          }}
        />
      </div>
      {events.map((event) => (
        <div key={event.id} className="mb-5">
          <EventItem event={event} />
        </div>
      ))}
    </div>
  );
}

export default EventList;
