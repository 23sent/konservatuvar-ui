import React from 'react';
import { Accordion, Button, Card } from 'react-bootstrap';
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
        {Boolean(questions?.length) &&
          questions.map((question, index) => (
            <Accordion className="my-3">
              <Accordion.Item eventKey="0">
                <Accordion.Header>{index}. Soru</Accordion.Header>
                <Accordion.Body>
                  <Question key={index} question={{ ...question }} />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          ))}
      </div>
    </>
  );
}

export default StartExercise;
