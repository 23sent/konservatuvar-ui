import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createExerciseRequest, getMyExercisesRequest } from '../store/actions';
import { Button, Col, Row } from 'react-bootstrap';
import ExercisesTable from '../Components/Exercise/ExercisesTable';
import CreateExercise from '../Components/Modal/CreateExercise';

function MyExercisesPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMyExercisesRequest());
  }, []);

  const myExercises = useSelector((state) => state.exerciseReducer.myExercises);

  const [showAddModal, setShowAddModal] = useState(false);

  function handleAddExersize(exercise) {
    const { title, description, category_id } = exercise;
    dispatch(createExerciseRequest(title, description, category_id));
  }

  return (
    <>
      <Row>
        <Col className="p-2">
          <div className="h2">Egzersizlerim</div>
        </Col>
      </Row>
      <Row className="my-2 py-3 px-4">
        <Col>
          <ExercisesTable exercises={myExercises} onEdit={true} />
        </Col>
      </Row>
      <Row className="my-2 py-3 px-4">
        <Col>
          <Button onClick={() => setShowAddModal(true)}>Yeni Egzersiz Oluştur</Button>
        </Col>
      </Row>

      <CreateExercise
        show={showAddModal}
        onHide={() => setShowAddModal(false)}
        onSave={(exercise) => handleAddExersize(exercise)}
      />
    </>
  );
}

export default MyExercisesPage;
