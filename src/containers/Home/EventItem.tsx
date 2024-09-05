import { IconHeartHand } from '@pentabd/icons';
import { Text } from '@pentabd/ui';
import { EventType } from '@type/events';

function EventItem({ event }: { event: EventType }) {
  return (
    <div className="bg-white rounded-2 p-10">
      <div className="mb-8">
        <Text className="mb-8" weight="bold" size="lg">
          {event.name}
        </Text>
        <div>{event.description}</div>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-2">
          <IconHeartHand size={20} />
          <Text size="sm">{event.like}</Text>
        </div>
        <Text size="sm">{event.date}</Text>
      </div>
    </div>
  );
}

export default EventItem;
