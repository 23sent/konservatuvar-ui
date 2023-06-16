import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { getCategoryDetailRequest } from '../store/actions/categories';
import { useDispatch } from 'react-redux';
import CategoryDetail from '../Components/Categories/CategoryDetail';
import { useParams } from 'react-router-dom';

function CategoryPage() {
  const { categoryId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (categoryId !== undefined) {
      dispatch(getCategoryDetailRequest(categoryId));
    }
  }, [categoryId]);

  return (
    <>
      <CategoryDetail />
    </>
  );
}

export default CategoryPage;
