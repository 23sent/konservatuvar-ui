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

  return (
    <div>
      <div>
        {Boolean(questions?.length) &&
          questions.map((question, index) => <EditQuestion key={index} question={question} index={index} />)}
      </div>
    </div>
  );
}

export default EditExercise;
