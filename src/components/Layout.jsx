import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

function Layout() {
  return (
    <div className="app">
      <Navbar />
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;