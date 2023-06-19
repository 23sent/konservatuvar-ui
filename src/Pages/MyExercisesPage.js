import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createExerciseRequest, getMyExercisesRequest } from '../store/actions';
import { Button, Col, Row } from 'react-bootstrap';
import ExercisesTable from '../Components/Exercise/ExercisesTable';
import CreateExercise from '../Components/Modal/CreateExercise';
import AppPageHead from './Parts/AppPageHead';

function MyExercisesPage() {
  const dispatch = useDispatch();
  useLayoutEffect(() => {
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
          <AppPageHead title={'Egzersizlerim'}>
            <div className="d-flex justify-content-end">
              <Button onClick={() => setShowAddModal(true)}>Yeni Egzersiz Oluştur</Button>
            </div>
          </AppPageHead>
        </Col>
      </Row>
      <Row className="my-2 py-3">
        <Col>
          <ExercisesTable exercises={myExercises} onEdit={true} />
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
