import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';

const MainLayout = () => {
  return (
    <div className="app-container">
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
