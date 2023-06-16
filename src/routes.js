import { Outlet, Route } from 'react-router-dom';
import MainLayout from './Layouts/MainLayout';
import AppLayout from './Layouts/AppLayout';
import ExercisePage from './Pages/ExercisePage';
import AccountPage from './Pages/AccountPage';
import React from 'react';
import CategoriesPage from './Pages/CategoriesPage';
import CategoryPage from './Pages/CategoryPage';
import EditExercisePage from './Pages/EditExercisePage';
import ProtectedRouteLayout from './Routes/ProtectedRouteLayout';
import NotAuthLayout from './Routes/NotAuthLayout';
import MyExercisesPage from './Pages/MyExercisesPage';

const routes = {
  MainLayout: {
    component: MainLayout,
    children: [
      {
        path: '/',
        exact: true,
        component: React.Fragment,
        routeLayout: NotAuthLayout,
      },
    ],
  },
  AppLayout: {
    component: AppLayout,
    children: [
      {
        path: '/app',
        exact: true,
        component: CategoriesPage,
        routeLayout: Outlet,
      },
      {
        path: '/app/category/:categoryId',
        exact: true,
        component: CategoryPage,
        routeLayout: Outlet,
      },
      {
        path: '/app/exercise/:exerciseId',
        exact: true,
        component: ExercisePage,
        routeLayout: Outlet,
      },
      {
        path: '/app/account',
        component: AccountPage,
        exact: true,
        routeLayout: Outlet,
      },
      {
        path: 'app/my/exercises',
        exact: true,
        component: MyExercisesPage,
        routeLayout: ProtectedRouteLayout,
      },
      {
        path: 'app/my/exercises/edit/:exerciseId',
        exact: true,
        component: EditExercisePage,
        routeLayout: ProtectedRouteLayout,
      },
    ],
  },
};

export default routes;
