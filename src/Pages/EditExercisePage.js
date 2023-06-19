import React, { useEffect, useLayoutEffect } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  createQuestionRequest,
  endEditingExercise,
  getExerciseRequest,
  startEditingExercise,
  updateExerciseRequest,
} from '../store/actions';
import EditExercise from '../Components/Edit/EditExercise';
import CreateExercise from '../Components/Modal/CreateExercise';
import EditQuestionModal from '../Components/Edit/EditQuestion/EditQuestionModal';
import AppPageHead from './Parts/AppPageHead';
import QuestionTypeDropdown from '../Components/Edit/EditQuestion/QuestionTypeDropdown';
import { ExampleMultiSelectionQuestion2, QuestionTypes } from '../Constants/question';

function EditExercisePage({ ...props }) {
  const { exerciseId } = useParams();
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    if (exerciseId !== undefined) {
      dispatch(getExerciseRequest(exerciseId));
    }
  }, [exerciseId]);

  const exerciseState = useSelector((state) => state.exerciseReducer.state);
  const exercise = useSelector((state) => state.exerciseReducer.exercise);

  const editingExercise = useSelector((state) => state.exerciseReducer.editExercise);

  const { title, description, questions, id: exercise_id } = exercise;

  // TODO: Improve exercise loading
  if (!exercise.title) return <></>;

  function handleAddQuestion(questionType) {
    if (questionType === QuestionTypes.MultiSelection) {
      dispatch(createQuestionRequest(exercise_id, { ...ExampleMultiSelectionQuestion2 }));
    } else if (questionType === QuestionTypes.Rhythm) {
      dispatch(createQuestionRequest(exercise_id, { type: QuestionTypes.Rhythm, rhythm: [] }));
    }
  }

  return (
    <>
      <Row>
        <Col className="p-2">
          <AppPageHead title={title} description={description}>
            <div className="d-flex justify-content-between">
              <div>
                <QuestionTypeDropdown
                  placeholder="Soru Ekle"
                  onChange={(questionType) => handleAddQuestion(questionType)}
                />
              </div>
              <Button
                onClick={() => {
                  dispatch(startEditingExercise(exercise));
                }}
              >
                Egzersiz Bilgilerini Düzenle
              </Button>
            </div>
          </AppPageHead>
        </Col>
      </Row>

      <Row className="my-2 py-3 ">
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
