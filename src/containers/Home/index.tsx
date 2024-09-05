import { useState } from 'react';
import { useEvents } from '@hooks/useEvents';
import CreateEvent from './create-event';

function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const { events } = useEvents();

  return (
    <div className="d-flex flex-column align-items-center w-100">
      <CreateEvent modalOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

export default Home;
