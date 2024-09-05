import CreateEvent from './CreateEvent';
import EventList from './EventList';

function Home() {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="col-12 col-md-10 col-lg-8 col-xl-8 h-100">
          <CreateEvent />
          <EventList />
        </div>
      </div>
    </>
  );
}

export default Home;
