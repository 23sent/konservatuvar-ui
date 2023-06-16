import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { createQuestionRequest } from '../../store/actions/question';
import { ExampleMultiSelectionQuestion2, QuestionTypes } from '../../Constants/question';
import EditQuestion from './EditQuestion/EditQuestion';
import QuestionTypeDropdown from './EditQuestion/QuestionTypeDropdown';

function EditExercise({}) {
  const dispatch = useDispatch();

  const exercise = useSelector((state) => state.exerciseReducer.exercise);
  const { id: exercise_id, questions } = exercise;

  function handleAddQuestion(questionType) {
    if (questionType === QuestionTypes.MultiSelection) {
      dispatch(createQuestionRequest(exercise_id, { ...ExampleMultiSelectionQuestion2 }));
    } else if (questionType === QuestionTypes.Rhythm) {
      dispatch(createQuestionRequest(exercise_id, { type: QuestionTypes.Rhythm, rhythm: [] }));
    }
  }

  return (
    <div>
      <div>
        {Boolean(questions?.length) &&
          questions.map((question, index) => <EditQuestion key={index} question={question} index={index} />)}
      </div>
      <div>
        <QuestionTypeDropdown placeholder="Soru Ekle" onChange={(questionType) => handleAddQuestion(questionType)} />
      </div>
    </div>
  );
}

export default EditExercise;
