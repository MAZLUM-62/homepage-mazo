import { useState } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const routes = [
  { path: '/', label: 'Home' },
  { path: '/leistungen', label: 'Leistungen' },
  { path: '/portfolio', label: 'Portfolio' },
  { path: '/ueber-uns', label: 'Über uns' },
];

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed w-full z-50 bg-bg-primary/95 backdrop-blur-sm border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-text-primary">
              MazoCode
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {routes.map((route) => (
              <Link
                key={route.path}
                to={route.path}
                className={`nav-link ${
                  location.pathname === route.path ? 'nav-link-active' : ''
                }`}
              >
                {route.label}
              </Link>
            ))}
            <Link to="/Kontakt" className="btn btn-primary">
              Anfrage
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-text-secondary hover:text-text-primary"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-bg-secondary border-b border-border-subtle">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {routes.map((route) => (
              <Link
                key={route.path}
                to={route.path}
                className={`flex items-center px-3 py-2 text-base font-medium rounded-md ${
                  location.pathname === route.path
                    ? 'bg-bg-tertiary text-text-primary'
                    : 'text-text-secondary hover:bg-bg-tertiary hover:text-text-primary'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {route.label}
                <ChevronRight size={16} className="ml-auto" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;