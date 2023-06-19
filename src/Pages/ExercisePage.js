import React, { useEffect, useLayoutEffect } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import exerciseStates from '../Constants/exerciseStates';
import StartExercise from '../Components/Exercise/StartExercise';
import { getCategoryDetailRequest, getExerciseRequest, resetExercise, startExercise } from '../store/actions';
import OngoingExercise from '../Components/Exercise/OngoingExercise';
import EndExercise from '../Components/Exercise/EndExercise';
import AppPageHead from './Parts/AppPageHead';
import ExerciseProgressBar from '../Components/Exercise/ExerciseProgressBar';

function ExercisePage({ ...props }) {
  const { exerciseId } = useParams();
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(resetExercise());
  }, []);

  useLayoutEffect(() => {
    if (exerciseId !== undefined) {
      dispatch(getExerciseRequest(exerciseId));
    }
  }, [exerciseId]);

  const exerciseState = useSelector((state) => state.exerciseReducer.state);
  const exercise = useSelector((state) => state.exerciseReducer.exercise);

  const category = useSelector((state) => state.categoriesReducer.category);
  useLayoutEffect(() => {
    if (exercise) {
      if (!category?.id || category?.id !== exercise.category_id) {
        dispatch(getCategoryDetailRequest(exercise.category_id));
      }
    }
  }, [exercise?.id]);

  const { title, description, questions } = exercise;

  // TODO: Improve exercise loading
  if (!exercise.title) return <></>;

  return (
    <>
      <Row>
        <Col className="p-2">
          <AppPageHead title={title} description={description}>
            <div className="d-flex justify-content-end">
              {exerciseState === exerciseStates.BEFORE_START && (
                <Button onClick={() => dispatch(startExercise(exercise.id))}>Egzersiz Yapmaya Başla!</Button>
              )}
            </div>
          </AppPageHead>
        </Col>
      </Row>
      <Row className="my-2 py-3 px-4">
        <Col>
          {exerciseState !== exerciseStates.BEFORE_START && (
            <div className="d-flex flex-grow-1 align-items-center mb-3">
              <ExerciseProgressBar />
            </div>
          )}
          {exerciseState === exerciseStates.BEFORE_START && <StartExercise />}
          {exerciseState === exerciseStates.ONGOING && <OngoingExercise />}
          {exerciseState === exerciseStates.ENDED && <EndExercise />}
        </Col>
      </Row>
    </>
  );
}

export default ExercisePage;
