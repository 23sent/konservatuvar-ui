import React, { useEffect, useLayoutEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { getCategoryDetailRequest } from '../store/actions/categories';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import AppPageHead from './Parts/AppPageHead';
import ExercisesTable from '../Components/Exercise/ExercisesTable';

function CategoryPage() {
  const { categoryId } = useParams();
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    if (categoryId !== undefined) {
      dispatch(getCategoryDetailRequest(categoryId));
    }
  }, [categoryId]);

  const category = useSelector((state) => state.categoriesReducer.category);
  const { title, description, exercises } = category;

  return (
    <>
      <Row>
        <Col className="">
          <AppPageHead title={title} description={description} />
        </Col>
      </Row>
      {/* <Row>
        <Col>
          <div className="h4">Egzersizler</div>
        </Col>
      </Row> */}
      <Row className="my-2 py-3 ">
        <Col>
          <ExercisesTable exercises={exercises}></ExercisesTable>
        </Col>
      </Row>
    </>
  );
}

export default CategoryPage;
