import React from 'react';
import ExerciseCard from './ExerciseCard';

function ExercisesTable({ exercises, onEdit, ...props }) {
  return (
    <div className="d-flex w-100 justify-content-center flex-wrap gap-4">
      {Boolean(exercises?.length) &&
        exercises.map((exercise, index) => (
          <div className="" style={{ width: '300px' }} key={index}>
            <ExerciseCard exercise={exercise} onEdit={onEdit} />
          </div>
        ))}
    </div>
  );
}

export default ExercisesTable;
