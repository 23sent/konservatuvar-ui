import React, { useEffect, useState } from 'react';
import Question from '../../Question/Question';
import { Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { QuestionTypes } from '../../../Constants/question';
import EditMultiSelection from './EditMultiSelection';
import {
  endEditingQuestion,
  startEditingQuestion,
  deleteQuestionRequest,
  updateQuestionRequest,
} from '../../../store/actions';
import './EditQuestion.scss';

function EditQuestion({ question, index }) {
  const dispatch = useDispatch();
  const { id: question_id, content } = question;
  const { type } = content;

  const editingQuestion = useSelector((state) => state.editQuestionReducer.question);

  function handleDeleteQuestion() {
    dispatch(deleteQuestionRequest(question_id));
  }

  function getEditableQuestion() {
    if (editingQuestion?.id === undefined) return <></>;

    if (type === QuestionTypes.MultiSelection) {
      return <EditMultiSelection question={editingQuestion} />;
    }
    return <></>;
  }

  function saveChanges() {
    const newQuestion = editingQuestion;
    dispatch(updateQuestionRequest(newQuestion.id, newQuestion.content));
    dispatch(endEditingQuestion());
  }

  return (
    <Card className="edit_question mb-3">
      <Card.Header className="d-flex align-items-center justify-content-between">
        <div className="h4">{index + 1}.</div>

        <div className="d-flex align-items-center justify-content-end gap-2">
          <>
            <Button onClick={(e) => dispatch(startEditingQuestion(question))}>Düzenle</Button>
            <Button onClick={(e) => handleDeleteQuestion()}>Sil</Button>
          </>
        </div>
      </Card.Header>
      <Card.Body>{<Question question={question} />}</Card.Body>
    </Card>
  );
}

export default EditQuestion;
