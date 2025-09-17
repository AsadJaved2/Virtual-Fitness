import { useNavigate } from 'react-router-dom';
import { WorkoutStrategy } from '../patterns/WorkoutStrategy';
import { useTheme } from '../patterns/ThemeContext';

interface WorkoutPlanProps {
  strategy: WorkoutStrategy;
}

export function WorkoutPlan({ strategy }: WorkoutPlanProps) {
  const themeManager = useTheme();
  const navigate = useNavigate();

  const handleStartWorkout = () => {
    navigate('/workout-details');
  };

  return (
    <div className={`p-6 rounded-lg shadow-md ${
      themeManager.getTheme() === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
    }`}>
      <h3 className="text-xl font-bold mb-4">{strategy.getName()}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{strategy.getDescription()}</p>
      <div className="flex items-center justify-between">
        <span className="text-sm">
          Recommended Duration: {strategy.getRecommendedDuration()} minutes
        </span>
        <button 
          onClick={handleStartWorkout}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
        >
          Start Workout
        </button>
      </div>
    </div>
  );
}