import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function ExerciseProgressBar() {
  const exercise = useSelector((state) => state.exerciseReducer.exercise);
  const { questions } = exercise;

  const question_accuracies = useSelector((state) => state.exerciseReducer.question_accuracies);

  return (
    <ProgressBar className="w-100" animated>
      {questions.map(({ id: question_id }, index) => {
        const accuracy = question_accuracies?.[question_id]?.accuracy;
        return (
          <ProgressBar
            key={question_id}
            now={question_accuracies?.[question_id] ? 100 / questions.length : 0}
            variant={accuracy > 0.7 ? 'success' : accuracy < 0.3 ? 'danger' : 'warning'}
          />
        );
      })}
    </ProgressBar>
  );
}

export default ExerciseProgressBar;
