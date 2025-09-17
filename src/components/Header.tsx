import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../image/logo.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();

  const scrollToWorkouts = () => {
    const element = document.getElementById('workout-plans');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-12 w-auto"  />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-gray-700 hover:text-indigo-600">Home</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600">Programs</a>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-indigo-600"
            >
              About
            </Link>
            <a href="#" className="text-gray-700 hover:text-indigo-600">Contact</a>
            <button 
              onClick={scrollToWorkouts}
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
            >
              Start Training
            </button>
            <button 
              onClick={() => navigate('/login')}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
            >
              Log Out
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Home</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Programs</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">About</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Contact</a>
              <button 
                onClick={scrollToWorkouts}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-indigo-600"
              >
                Start Training
              </button>
              <button 
                onClick={() => navigate('/login')}
                className="block w-full text-left px-3 py-2 text-red-500 hover:text-red-600"
              >
                Log Out
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}