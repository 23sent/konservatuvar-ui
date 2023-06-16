import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import exerciseStates from '../Constants/exerciseStates';
import StartExercise from '../Components/Exercise/StartExercise';
import { getExerciseRequest, startExercise } from '../store/actions';
import OngoingExercise from '../Components/Exercise/OngoingExercise';
import EndExercise from '../Components/Exercise/EndExercise';

function ExercisePage({ ...props }) {
  const { exerciseId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (exerciseId !== undefined) {
      dispatch(getExerciseRequest(exerciseId));
    }
  }, [exerciseId]);

  const exerciseState = useSelector((state) => state.exerciseReducer.state);
  const exercise = useSelector((state) => state.exerciseReducer.exercise);

  const { title, description, questions } = exercise;

  // TODO: Improve exercise loading
  if (!exercise.title) return <></>;

  return (
    <>
      <Row>
        <Col className="p-2">
          <div className="h2">{title}</div>
          <div className=" ">{description}</div>
        </Col>
      </Row>
      <Row className="my-2 py-3 px-4">
        <Col>
          {exerciseState === exerciseStates.BEFORE_START && <StartExercise />}
          {exerciseState === exerciseStates.ONGOING && <OngoingExercise />}
          {exerciseState === exerciseStates.ENDED && <EndExercise />}
        </Col>
      </Row>
    </>
  );
}

export default ExercisePage;
