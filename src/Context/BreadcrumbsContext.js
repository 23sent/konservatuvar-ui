import { createContext, useContext } from 'react';

export const BreadcrumbsContext = createContext();

export function useBreadcrumbs() {
  return useContext(BreadcrumbsContext);
}
