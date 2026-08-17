import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '../components/Header';
import BreakingTicker from '../components/BreakingTicker';
import Footer from '../components/Footer';

export default function MainLayout() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    // Explicit return for cleanup (no cleanup needed here, but best practice)
    return undefined;
  }, [pathname]);
  
  return (
    <>
      <Header />
      <BreakingTicker />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
