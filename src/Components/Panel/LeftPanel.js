import React, { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoriesRequest } from '../../store/actions';
import { Card, ListGroup, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function LeftPanel({ ...props }) {
  const categories = useSelector((state) => state.categoriesReducer?.categories);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    if (!categories?.length) {
      dispatch(getCategoriesRequest());
    }
  }, []);

  return (
    <div className="bg-light shadow" style={{ width: '300px', maxWidth: '75%', minWidth: 'fit-content' }}>
      <div className="h-100 px-3 py-5 mw-25">
        <div className="h4">Kategoriler</div>
        <div className="left-panel-links">
          {categories?.length > 1 &&
            categories.map((category, index) => (
              <Nav.Item key={index} className="fs-5 py-2 ps-2">
                <Nav.Link as={NavLink} to={`/app/category/${category.id}`}>
                  {category.title}
                </Nav.Link>
              </Nav.Item>
            ))}
        </div>
      </div>
    </div>
  );
}

export default LeftPanel;
