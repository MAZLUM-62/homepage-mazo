import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ObserverProvider from './utils/ObserverProvider';

import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import Kunden from './pages/Kunden';
import ScrollToTop from './utils/ScrollToTop';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark-900 text-white flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <ObserverProvider>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/leistungen" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/kunde/:title" element={<Kunden />} />

            <Route path="/ueber-uns" element={<About />} />
            <Route path="/kontakt" element={<Contact />} />
          </Routes>
          </ObserverProvider>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;