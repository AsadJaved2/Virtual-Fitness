import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { WorkoutDetailsPage } from './pages/WorkoutDetailsPage';
import { ThemeProvider } from './patterns/ThemeContext';
import { SignupPage } from './pages/SignupPage';
import { LoginPage } from './pages/LoginPage';
import { SignupForm } from './pages/SignupForm';
import { AboutPage } from './pages/AboutPage';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={
            <div className="min-h-screen bg-gray-50">
              <Header />
              <main>
                <Hero />
                <Features />
              </main>
            </div>
          } />
          <Route path="/workout-details" element={<WorkoutDetailsPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup/form" element={<SignupForm />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;