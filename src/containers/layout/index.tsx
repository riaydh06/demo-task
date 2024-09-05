import { Outlet } from 'react-router-dom';

function LayoutView() {
  return (
    <div className="container vh-100 overflow-hidden">
      <div className="row g-0 h-100">
        <div className="col-12 col-md-12 col-lg-12 col-xl-12 p-9 h-100 overflow-y-scroll">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default LayoutView;
