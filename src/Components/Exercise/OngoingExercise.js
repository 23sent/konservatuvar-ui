import React, { useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Question from '../Question/Question';
import { endEditingExercise, endExercise, nextQuestion } from '../../store/actions';
import ExerciseProgressBar from './ExerciseProgressBar';

function OngoingExercise({ ...props }) {
  // const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const dispatch = useDispatch();
  const exercise = useSelector((state) => state.exerciseReducer.exercise);
  const currentQuestionIndex = useSelector((state) => state.exerciseReducer.currentQuestionIndex);

  const questions = exercise.questions;
  const currentQuestion = questions[currentQuestionIndex];
  return (
    <div>
      <Row>
        <Col>
          <div className="d-flex justify-content-between">
            {/* <Button
              size="sm"
              disabled={currentQuestionIndex <= 0 ? true : false}
              onClick={() => setCurrentQuestionIndex((i) => (i <= 0 ? 0 : i - 1))}
            >
              Prev Question
            </Button> */}
            {currentQuestionIndex < questions.length - 1 ? (
              <Button variant="danger" onClick={() => dispatch(endExercise())}>
                Burada Bitir
              </Button>
            ) : (
              <div></div>
            )}

            <Button onClick={() => dispatch(nextQuestion())}>
              {currentQuestionIndex >= questions.length - 1 ? 'Egzersizi Sonlandır' : 'Sıradaki Soru'}
            </Button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="p-2">
            {currentQuestion && (
              <Card>
                <Card.Body>
                  <Question key={currentQuestion.id} question={currentQuestion} />
                </Card.Body>
              </Card>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default OngoingExercise;
