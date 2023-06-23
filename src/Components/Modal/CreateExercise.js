import React, { useEffect, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import CategoryDropdown from '../Edit/CategoryDropdown';

function CreateExercise({ defaultExercise = {}, show, onHide, onSave, ...props }) {
  const [exercise, setExercise] = useState({ title: '', description: '', category_id: null, ...defaultExercise });

  useEffect(() => {
    if (show) setExercise({ title: '', description: '', category_id: null, ...defaultExercise });
  }, [show]);

  function handleOnHide() {
    onHide();
  }

  function handleOnSave() {
    if (exercise.title && exercise.category_id && exercise.description) {
      onSave(exercise);
    }
    onHide();
  }
  return (
    <Modal centered show={show} onHide={() => handleOnHide()}>
      <Modal.Body>
        <Form.Group>
          <Form.Label>Başlık</Form.Label>
          <Form.Control value={exercise.title} onChange={(e) => setExercise({ ...exercise, title: e.target.value })} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Açıklama</Form.Label>
          <Form.Control
            value={exercise.description}
            onChange={(e) => setExercise({ ...exercise, description: e.target.value })}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Kategori</Form.Label>
          <CategoryDropdown
            category_id={exercise.category_id}
            onChange={(category_id) => setExercise({ ...exercise, category_id })}
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
            handleOnSave();
          }}
        >
          Save
        </Button>
        <Button
          variant="secondary"
          onClick={() => {
            onHide();
          }}
        >
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CreateExercise;
