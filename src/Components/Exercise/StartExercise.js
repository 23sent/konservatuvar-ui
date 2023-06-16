import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { startExercise } from '../../store/actions';
import Question from '../Question/Question';

function StartExercise() {
  const dispatch = useDispatch();

  const exercise = useSelector((state) => state.exerciseReducer.exercise);

  const { id, questions } = exercise;

  return (
    <>
      <div>
        <Button onClick={() => dispatch(startExercise(id))}>Start Exercise</Button>
      </div>
      <div>
        {Boolean(questions?.length) &&
          questions.map((question, index) => (
            <div className="my-3">
              <Question key={index} question={{ ...question }} />{' '}
            </div>
          ))}
      </div>
    </>
  );
}

export default StartExercise;
