import React from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function EndExercise() {
  const exercise = useSelector((state) => state.exerciseReducer.exercise);
  const totalAccuracy = useSelector((state) => state.exerciseReducer.totalAccuracy);

  const { id, questions } = exercise;
  const accuracy = totalAccuracy / questions.length;

  return (
    <div>
      End Exercise
      <div>Accuracy: {accuracy * 100}%</div>
      <Button onClick={() => window.location.reload()}>End</Button>
    </div>
  );
}

export default EndExercise;
