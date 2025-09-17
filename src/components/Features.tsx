import { Users, Video, Calendar, MessageSquare } from 'lucide-react';
import { WorkoutPlan } from './WorkoutPlan';
import { 
  BeginnerWorkoutStrategy, 
  IntermediateWorkoutStrategy, 
  AdvancedWorkoutStrategy 
} from '../patterns/WorkoutStrategy';

const features = [
  {
    name: 'Live Training Sessions',
    description: 'Join interactive group sessions with expert trainers in real-time.',
    icon: Video,
  },
  {
    name: 'Personal Coaching',
    description: 'Get one-on-one attention and customized workout plans.',
    icon: Users,
  },
  {
    name: 'Flexible Scheduling',
    description: 'Book sessions that fit your schedule with our easy calendar system.',
    icon: Calendar,
  },
  {
    name: '24/7 Support',
    description: 'Access to trainers and support staff whenever you need help.',
    icon: MessageSquare,
  },
];

export function Features() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Why Choose Us</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to reach your fitness goals
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our virtual fitness platform combines technology with expert coaching to deliver 
            an unmatched training experience.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div id="workout-plans" className="mt-16 grid gap-8 md:grid-cols-3">
          <WorkoutPlan strategy={new BeginnerWorkoutStrategy()} />
          <WorkoutPlan strategy={new IntermediateWorkoutStrategy()} />
          <WorkoutPlan strategy={new AdvancedWorkoutStrategy()} />
        </div>
      </div>
    </div>
  );
}