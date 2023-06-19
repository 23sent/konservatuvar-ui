import React, { useMemo } from 'react';
import { NavLink, useMatch, useResolvedPath } from 'react-router-dom';
import { useBreadcrumbs } from '../../Context/BreadcrumbsContext';
import { useSelector } from 'react-redux';
import { Breadcrumb } from 'react-bootstrap';
import { Icon } from '../../Components/Common';

function ExerciseCrumb() {
  const exercise = useSelector((state) => state.exerciseReducer.exercise);

  const { title } = exercise;

  return <Crumb title={title} path={`/app/exercise/${exercise.id}`} />;
}

function CategoryCrumb() {
  const category = useSelector((state) => state.categoriesReducer.category);

  const { title } = category;

  return <Crumb title={title} path={`/app/category/${category.id}`} />;
}

function Crumb({ title, path }) {
  return (
    <NavLink className="text-nowrap" to={`${path}`}>
      {title}
    </NavLink>
  );
}

function Breadcrumbs({ children }) {
  const breads = useBreadcrumbs();

  if (!breads?.length) return <></>;

  return (
    <>
      <div className="d-flex align-items-center fs-4 breadcrumbs gap-2">
        {breads.map((crumb, index) => (
          <>
            <span className="d-flex align-items-center" key={index}>
              {crumb}
            </span>
            {index < breads.length - 1 && (
              <span className="d-flex align-items-center">
                <Icon name="ChevronRight" />
              </span>
            )}
          </>
        ))}
      </div>
      {children ? children : <></>}
    </>
  );
}

export { Breadcrumbs, Crumb, CategoryCrumb, ExerciseCrumb };
