import React from 'react';
import ExerciseCard from './ExerciseCard';

function ExercisesTable({ exercises, onEdit, ...props }) {
  return (
    <div className="d-flex justify-cotent-between flex-wrap gap-3">
      {Boolean(exercises?.length) &&
        exercises.map((exercise, index) => (
          <div className="" style={{ minWidth: '300px', maxWidth: '450px' }} key={index}>
            <ExerciseCard exercise={exercise} onEdit={onEdit} />
          </div>
        ))}
    </div>
  );
}

export default ExercisesTable;
