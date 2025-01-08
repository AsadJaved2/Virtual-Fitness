// Strategy Pattern - Different workout strategies
export interface WorkoutStrategy {
  getName(): string;
  getDescription(): string;
  getRecommendedDuration(): number;
}

export class BeginnerWorkoutStrategy implements WorkoutStrategy {
  getName(): string {
    return 'Beginner Workout';
  }

  getDescription(): string {
    return 'Basic exercises focusing on form and building foundational strength.';
  }

  getRecommendedDuration(): number {
    return 30; // minutes
  }
}

export class IntermediateWorkoutStrategy implements WorkoutStrategy {
  getName(): string {
    return 'Intermediate Workout';
  }

  getDescription(): string {
    return 'Moderate intensity exercises with complex movements.';
  }

  getRecommendedDuration(): number {
    return 45; // minutes
  }
}

export class AdvancedWorkoutStrategy implements WorkoutStrategy {
  getName(): string {
    return 'Advanced Workout';
  }

  getDescription(): string {
    return 'High-intensity exercises with advanced techniques.';
  }

  getRecommendedDuration(): number {
    return 60; // minutes
  }
}