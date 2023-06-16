import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoriesRequest } from '../../store/actions';

function CategoryDropdown({ category_id, onChange, ...props }) {
  const categories = useSelector((state) => state.categoriesReducer?.categories);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    if (!categories?.length) {
      dispatch(getCategoriesRequest());
    }
  }, []);

  function handleSelect(category_id) {
    onChange?.(category_id);
  }

  function getOptions() {
    const options = [];
    for (const category of categories) {
      options.push(<Dropdown.Item onClick={() => handleSelect(category.id)}>{category.title}</Dropdown.Item>);
    }
    return options;
  }

  function getTypeName(type) {
    for (const category of categories) {
      if (category.id === category_id) return category.title;
    }
    return 'Seçim Yapılmadı';
  }

  return (
    <Dropdown>
      <Dropdown.Toggle as="div" className="d-flex align-items-center">
        {getTypeName(category_id)}
      </Dropdown.Toggle>
      <Dropdown.Menu>{getOptions()}</Dropdown.Menu>
    </Dropdown>
  );
}

export default CategoryDropdown;
