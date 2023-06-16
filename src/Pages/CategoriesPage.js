import React, { useEffect } from 'react';
import CategoriesTable from '../Components/Categories/CategoriesTable';
import { Col, Row } from 'react-bootstrap';
import { getCategoriesRequest } from '../store/actions/categories';
import { useDispatch } from 'react-redux';

function CategoriesPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoriesRequest());
  }, []);

  return (
    <>
      <Row>
        <Col>
          <div className="h2 m-2">Kategoriler</div>
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
