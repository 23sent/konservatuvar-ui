import React from 'react';
import { useSelector } from 'react-redux';
import CategoryCard from './CategoryCard';

function CategoriesTable({ ...props }) {
  const categories = useSelector((state) => state.categoriesReducer?.categories);

  return (
    <div className="d-flex justify-cotent-between flex-wrap gap-3">
      {categories.map((category, index) => (
        <div style={{ minWidth: '300px', maxWidth: '400px' }} key={index}>
          <CategoryCard {...category} />
        </div>
      ))}
    </div>
  );
}

export default CategoriesTable;
