import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import ExercisesTable from '../Exercise/ExercisesTable';

function CategoryDetail() {
  const category = useSelector((state) => state.categoriesReducer.category);
  const { title, description, exercises } = category;
  return (
    <>
      <Row>
        <Col className="mb-3">
          <div className="h2">{title}</div>
          <div className="my-2">{description}</div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="h4">Egzersizler</div>
        </Col>
      </Row>
      <Row className="my-2 py-3 px-4">
        <Col>
          <ExercisesTable exercises={exercises}></ExercisesTable>
        </Col>
      </Row>
    </>
  );
}

export default CategoryDetail;
