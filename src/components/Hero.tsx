
import { PlayCircle, ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative bg-gray-900">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-50"
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Fitness training"
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Transform Your Life<br />
          <span className="text-indigo-400">One Rep at a Time</span>
        </h1>
        <p className="mt-6 text-xl text-gray-300 max-w-3xl">
          Get personalized workout plans, expert guidance, and real-time feedback from certified trainers. 
          Train anywhere, anytime with our virtual coaching platform.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-gray-200 bg-gray-800 hover:bg-gray-700">
            Watch Demo
            <PlayCircle className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}