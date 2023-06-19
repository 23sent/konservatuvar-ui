import React from 'react';
import { useSelector } from 'react-redux';
import CategoryCard from './CategoryCard';

function CategoriesTable({ ...props }) {
  const categories = useSelector((state) => state.categoriesReducer?.categories);

  return (
    <div className="d-flex justify-content-center flex-wrap gap-4">
      {categories.map((category, index) => (
        <div style={{ minWidth: '400px', maxWidth: '400px' }} key={index}>
          <CategoryCard {...category} />
        </div>
      ))}
    </div>
  );
}

export default CategoriesTable;
