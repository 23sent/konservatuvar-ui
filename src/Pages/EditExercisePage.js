import React, { useEffect } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { endEditingExercise, getExerciseRequest, startEditingExercise, updateExerciseRequest } from '../store/actions';
import EditExercise from '../Components/Edit/EditExercise';
import CreateExercise from '../Components/Modal/CreateExercise';
import EditQuestionModal from '../Components/Edit/EditQuestion/EditQuestionModal';

function EditExercisePage({ ...props }) {
  const { exerciseId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (exerciseId !== undefined) {
      dispatch(getExerciseRequest(exerciseId));
    }
  }, [exerciseId]);

  const exerciseState = useSelector((state) => state.exerciseReducer.state);
  const exercise = useSelector((state) => state.exerciseReducer.exercise);

  const editingExercise = useSelector((state) => state.exerciseReducer.editExercise);

  const { title, description, questions } = exercise;

  // TODO: Improve exercise loading
  if (!exercise.title) return <></>;

  return (
    <>
      <Row>
        <Col className="p-2">
          <div className="w-100 d-flex justify-content-between">
            <div>
              <div className="h2">{title}</div>
              <div className=" ">{description}</div>
            </div>
            <div>
              <Button
                onClick={() => {
                  dispatch(startEditingExercise(exercise));
                }}
              >
                Edit
              </Button>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="my-2 py-3 px-4">
        <Col>
          <EditExercise />
        </Col>
      </Row>

      <EditQuestionModal />
      <CreateExercise
        show={editingExercise?.id ? true : false}
        defaultExercise={editingExercise}
        onHide={() => dispatch(endEditingExercise())}
        onSave={(exercise) => {
          dispatch(updateExerciseRequest(exercise));
        }}
      />
    </>
  );
}

export default EditExercisePage;
