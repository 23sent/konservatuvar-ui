import React, { useLayoutEffect } from 'react';
import CategoriesTable from '../Components/Categories/CategoriesTable';
import { Col, Row } from 'react-bootstrap';
import { getCategoriesRequest } from '../store/actions/categories';
import { useDispatch } from 'react-redux';
import AppPageHead from './Parts/AppPageHead';

function CategoriesPage() {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(getCategoriesRequest());
  }, []);

  return (
    <>
      <Row>
        <Col>
          <AppPageHead title={'Kategoriler'} />
        </Col>
      </Row>
      <Row className="my-2 py-3 px-4">
        <Col>
          <CategoriesTable />
        </Col>
      </Row>
    </>
  );
}

export default CategoriesPage;
