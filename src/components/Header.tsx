import React from 'react';
import { Menu, X} from 'lucide-react';
import logo from '../image/logo.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
          <img src={logo} alt="Logo" style={{ height: '200px', width: '250px' }} />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-indigo-600">Home</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600">Programs</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600">About</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600">Contact</a>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
              Start Training
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Home</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Programs</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">About</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Contact</a>
              <button className="w-full text-left px-3 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                Start Training
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}