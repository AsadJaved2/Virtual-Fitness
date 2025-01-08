import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { ThemeProvider } from './patterns/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Hero />
          <Features />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;