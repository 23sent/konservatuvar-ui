import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { endExercise, resetExercise, startExercise } from '../../store/actions';

function EndExercise() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const exercise = useSelector((state) => state.exerciseReducer.exercise);
  const totalAccuracy = useSelector((state) => state.exerciseReducer.totalAccuracy);

  const { id, questions } = exercise;
  const accuracy = totalAccuracy / questions.length;

  return (
    <div>
      <Row>
        <Col>
          <Card>
            <Card.Body className="d-flex flex-column align-items-center gap-3">
              <div className="display-4">Tebrikler!</div>
              <div className="display-6">
                Egzersizi <b>{Number(accuracy * 100).toFixed()}%</b> doğruluk oranı ile tamamladınız.
              </div>
              <div className="d-flex gap-3 mt-4">
                <Button onClick={() => dispatch(resetExercise())}>Tekrar Et</Button>
                <Button
                  onClick={() => {
                    dispatch(resetExercise());
                    navigate('/app');
                  }}
                >
                  Diğer Egzersizler
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default EndExercise;
