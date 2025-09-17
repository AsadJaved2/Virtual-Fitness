import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const workoutCategories = [
  'Chest', 'Back', 'Biceps', 'Triceps', 'Shoulders', 'Legs'
];

interface Exercise {
  name: string;
  aka?: string;
  sets: string;
  description: string;
  images: string[];
}

const workoutData: Record<string, Exercise[]> = {
  Chest: [
    {
      name: 'Cable Crossover',
      aka: 'Cable Fly',
      sets: '4 sets of 12 reps with 1m30 timeout',
      description: 'Stand between cable machines, pull cables together in front of chest for inner chest focus.',
      images: ['https://images.unsplash.com/photo-1576678927484-cc907957088c']
    },
    {
      name: 'Incline Dumbbell Press',
      sets: '4 sets of 12 reps with 1m30 timeout',
      description: 'Press dumbbells on an inclined bench to target upper chest development.',
      images: ['https://images.unsplash.com/photo-1583454110551-21f2fa2afe61']
    },
    {
      name: 'Cable Chest Press',
      sets: '4 sets of 12 reps with 1m30 timeout',
      description: 'Push cables forward at chest height for constant tension throughout movement.',
      images: ['https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5']
    },
    {
      name: 'Dumbbell Flyes',
      sets: '4 sets of 15 reps with 1m30 timeout',
      description: 'Lying on bench, open arms wide and squeeze chest to bring dumbbells together.',
      images: ['https://images.unsplash.com/photo-1583454110551-21f2fa2afe61']
    },
    {
      name: 'Bench Press',
      sets: '4 sets of 12 reps with 1m30 timeout',
      description: 'Classic chest exercise, lower barbell to chest and press up with controlled movement.',
      images: ['https://images.unsplash.com/photo-1576678927484-cc907957088c']
    }
  ],
  Back: [
    {
      name: 'Lat Pulldowns',
      sets: '4 sets of 12 reps with 1m30 timeout',
      description: 'Pull bar down to upper chest while keeping back straight to target latissimus muscles.',
      images: ['https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5']
    },
    {
      name: 'Barbell Rows',
      sets: '4 sets of 12 reps with 1m30 timeout',
      description: 'Bend forward, pull barbell to lower chest while keeping back straight.',
      images: ['https://images.unsplash.com/photo-1603287681836-b174ce5074c2']
    },
    {
      name: 'Seated Cable Rows',
      sets: '4 sets of 12 reps with 1m30 timeout',
      description: 'Pull cable attachment to stomach while maintaining upright posture.',
      images: ['https://images.unsplash.com/photo-1598632640487-6ea4a5e8d6c0']
    },
    {
      name: 'Pull-Ups',
      sets: '4 sets of 8-10 reps with 1m30 timeout',
      description: 'Grip bar overhead and pull chin above bar using back muscles.',
      images: ['https://images.unsplash.com/photo-1598971639058-b10fb9808bec']
    },
    {
      name: 'Deadlifts',
      sets: '4 sets of 10 reps with 2m timeout',
      description: 'Lift barbell from floor to hip level keeping back straight and core tight.',
      images: ['https://images.unsplash.com/photo-1603287681836-b174ce5074c2']
    }
  ],
  Biceps: [
    {
      name: 'Standing Barbell Curls',
      sets: '4 sets of 12 reps with 1m timeout',
      description: 'Curl barbell from thighs to shoulders while keeping elbows fixed.',
      images: ['https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e']
    },
    {
      name: 'Hammer Curls',
      sets: '4 sets of 12 reps with 1m timeout',
      description: 'Curl dumbbells with palms facing each other to target outer biceps.',
      images: ['https://images.unsplash.com/photo-1583440566877-2fdc14e4646f']
    },
    {
      name: 'Preacher Curls',
      sets: '4 sets of 12 reps with 1m timeout',
      description: 'Curl weight while arms rest on preacher bench for isolated bicep focus.',
      images: ['https://images.unsplash.com/photo-1583440566877-2fdc14e4646f']
    },
    {
      name: 'Concentration Curls',
      sets: '4 sets of 15 reps with 1m timeout',
      description: 'Seated single-arm curl with elbow braced against inner thigh.',
      images: ['https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e']
    }
  ],
  Triceps: [
    {
      name: 'Tricep Pushdowns',
      sets: '4 sets of 12 reps with 1m timeout',
      description: 'Push cable attachment down while keeping elbows at sides.',
      images: ['https://images.unsplash.com/photo-1598971639058-b10fb9808bec']
    },
    {
      name: 'Skull Crushers',
      sets: '4 sets of 12 reps with 1m timeout',
      description: 'Lower weight to forehead while lying on bench, then extend arms.',
      images: ['https://images.unsplash.com/photo-1583440566877-2fdc14e4646f']
    },
    {
      name: 'Overhead Extensions',
      sets: '4 sets of 12 reps with 1m timeout',
      description: 'Raise weight overhead and lower behind head while keeping elbows in.',
      images: ['https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e']
    },
    {
      name: 'Diamond Push-Ups',
      sets: '4 sets of max reps with 1m timeout',
      description: 'Push-ups with hands close together forming diamond shape.',
      images: ['https://images.unsplash.com/photo-1598971639058-b10fb9808bec']
    }
  ],
  Shoulders: [
    {
      name: 'Military Press',
      sets: '4 sets of 12 reps with 1m30 timeout',
      description: 'Press barbell overhead from shoulder level while standing.',
      images: ['https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e']
    },
    {
      name: 'Lateral Raises',
      sets: '4 sets of 15 reps with 1m timeout',
      description: 'Raise dumbbells to sides until parallel with ground.',
      images: ['https://images.unsplash.com/photo-1583440566877-2fdc14e4646f']
    },
    {
      name: 'Front Raises',
      sets: '4 sets of 12 reps with 1m timeout',
      description: 'Raise dumbbells in front of body to shoulder height.',
      images: ['https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e']
    },
    {
      name: 'Face Pulls',
      sets: '4 sets of 15 reps with 1m timeout',
      description: 'Pull rope attachment to face level targeting rear deltoids.',
      images: ['https://images.unsplash.com/photo-1598971639058-b10fb9808bec']
    },
    {
      name: 'Shrugs',
      sets: '4 sets of 15 reps with 1m timeout',
      description: 'Elevate shoulders towards ears while holding weights.',
      images: ['https://images.unsplash.com/photo-1583440566877-2fdc14e4646f']
    }
  ],
  Legs: [
    {
      name: 'Squats',
      sets: '4 sets of 12 reps with 2m timeout',
      description: 'Lower body until thighs are parallel with ground, then drive up.',
      images: ['https://images.unsplash.com/photo-1603287681836-b174ce5074c2']
    },
    {
      name: 'Leg Press',
      sets: '4 sets of 12 reps with 1m30 timeout',
      description: 'Push weight platform away while keeping back against seat.',
      images: ['https://images.unsplash.com/photo-1598971639058-b10fb9808bec']
    },
    {
      name: 'Romanian Deadlifts',
      sets: '4 sets of 12 reps with 1m30 timeout',
      description: 'Hinge at hips keeping legs straight to lower weight and feel hamstring stretch.',
      images: ['https://images.unsplash.com/photo-1603287681836-b174ce5074c2']
    },
    {
      name: 'Leg Extensions',
      sets: '4 sets of 15 reps with 1m timeout',
      description: 'Extend legs from seated position targeting quadriceps.',
      images: ['https://images.unsplash.com/photo-1598971639058-b10fb9808bec']
    },
    {
      name: 'Calf Raises',
      sets: '4 sets of 20 reps with 1m timeout',
      description: 'Rise onto toes while standing to target calf muscles.',
      images: ['https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e']
    }
  ]
};

export function WorkoutDetailsPage() {
  const [selectedCategory, setSelectedCategory] = useState('Chest');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with back button and print */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <Link to="/" className="text-gray-700 hover:text-indigo-600 mr-4">
                <ArrowLeft className="h-5 w-5" />
              </Link>
              <h1 className="text-2xl font-bold text-gray-900">{selectedCategory} WORKOUT</h1>
            </div>
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50">
              <span className="mr-2">PRINT</span>
              📄
            </button>
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            {workoutCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                  selectedCategory === category
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Workout Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          {workoutData[selectedCategory]?.map((exercise, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-indigo-600">
                    {exercise.name}
                  </h2>
                  {exercise.aka && (
                    <p className="text-sm text-gray-500 mt-1">AKA {exercise.aka}</p>
                  )}
                  <p className="text-sm text-gray-600 mt-2">{exercise.sets}</p>
                  <p className="text-sm text-gray-500 italic mt-2">{exercise.description}</p>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <img
                    src={exercise.images[0]}
                    alt={exercise.name}
                    className="h-24 w-32 object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 