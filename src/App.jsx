import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';
import { initializeAnalytics } from './config/analytics.js';
import Awareness from './pages/Awareness.jsx';
import Home from './pages/Home.jsx';
import Monitor from './pages/Monitor.jsx';
import Prediction from './pages/Prediction.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

export default function App() {
  useEffect(() => {
    initializeAnalytics();

    const redirect = sessionStorage.redirect;
    delete sessionStorage.redirect;

    if (redirect && redirect !== window.location.pathname) {
      window.history.replaceState(null, '', redirect);
    }
  }, []);

  return (
    <div className="min-h-screen bg-mist text-navy">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/monitor" element={<Monitor />} />
          <Route path="/prediction" element={<Prediction />} />
          <Route path="/awareness" element={<Awareness />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
