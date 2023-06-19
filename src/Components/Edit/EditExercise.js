import React from 'react';
import { useSelector } from 'react-redux';

import EditQuestion from './EditQuestion/EditQuestion';

function EditExercise({}) {
  const exercise = useSelector((state) => state.exerciseReducer.exercise);
  const { id: exercise_id, questions } = exercise;

  return (
    <div>
      <div>
        {Boolean(questions?.length) &&
          questions.map((question, index) => <EditQuestion key={question.id} question={question} index={index} />)}
      </div>
    </div>
  );
}

export default EditExercise;
