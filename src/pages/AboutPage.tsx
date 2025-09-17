import React from 'react';
import { Header } from '../components/Header';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8 relative">
          The Workout
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-500 mt-4"></div>
        </h1>

        <div className="space-y-8 text-gray-300">
          {/* First Paragraph */}
          <p className="text-lg leading-relaxed">
            There is no limit to what you are capable of, physically and mentally. The Limit is about 
            perseverance. The goal is to push yourself past your individual limit.
          </p>

          {/* Second Paragraph */}
          <p className="text-lg leading-relaxed">
            We believe that each person requires unique training for their personal abilities. Our trainers are 
            all certified and able to adapt to your needs, whether you are dealing with an injury or health 
            issue, are pregnant or postpartum or you're just looking for the ultimate challenge. There's 
            always a way to train hard and get results.
          </p>

          {/* Third Paragraph */}
          <p className="text-lg leading-relaxed">
            Our videos provide a variety of workouts with movements that are simple, effective and safe, no 
            matter your level. We prioritize proper form and biomechanics with clear instructions. Our goal 
            is to make you feel strong and confident in yourself, no matter your level.
          </p>

          {/* Fourth Paragraph */}
          <p className="text-lg leading-relaxed">
            We are excited to help you find your limit and push yourself past it. Now let's do it!
          </p>
        </div>
      </div>
    </div>
  );
}
