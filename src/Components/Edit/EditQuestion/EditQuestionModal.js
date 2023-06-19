import React, { useEffect } from 'react';
import { Button, Card, Container, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { endEditingQuestion, updateQuestionRequest } from '../../../store/actions';
import EditMultiSelection from './EditMultiSelection';
import { QuestionTypes } from '../../../Constants/question';
import EditRhythm from './EditRhythm';
import EditFlashcard from './EditFlashcard';

function EditQuestionModal({ onHide, onSave, ...props }) {
  const dispatch = useDispatch();
  const editingQuestion = useSelector((state) => state.editQuestionReducer.question);
  const show = editingQuestion?.id ? true : false;

  function getEditableQuestion() {
    if (editingQuestion?.id === undefined) return <></>;
    const { type } = editingQuestion.content;

    if (type === QuestionTypes.MultiSelection) {
      return <EditMultiSelection question={editingQuestion} />;
    } else if (type === QuestionTypes.Rhythm) {
      return <EditRhythm question={editingQuestion} />;
    } else if (type === QuestionTypes.Flashcard) {
      return <EditFlashcard question={editingQuestion} />;
    }
    return <></>;
  }

  function saveChanges() {
    const newQuestion = editingQuestion;
    dispatch(updateQuestionRequest(newQuestion.id, newQuestion.content));
    dispatch(endEditingQuestion());
  }

  function onHide() {
    dispatch(endEditingQuestion());
  }

  return (
    <Modal show={show} size="xl" centered onHide={() => onHide()}>
      <Modal.Header closeButton>Soruyu Düzenle</Modal.Header>
      <Modal.Body>
        <Container>{editingQuestion?.id && <>{getEditableQuestion()}</>}</Container>
      </Modal.Body>
      <Modal.Footer>
        <div className="d-flex align-items-center justify-content-end gap-2">
          {editingQuestion?.id && (
            <>
              <Button onClick={(e) => saveChanges()}>Save</Button>
              <Button variant="secondary" onClick={(e) => dispatch(endEditingQuestion())}>
                Cancel
              </Button>
            </>
          )}
        </div>
      </Modal.Footer>

      <Card.Body></Card.Body>
    </Modal>
  );
}

export default EditQuestionModal;
