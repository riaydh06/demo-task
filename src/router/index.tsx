import { Route, Routes } from 'react-router-dom';
import { ReactNode } from 'react';
import { routes } from './routes';

import { RouteType } from './types';
import { AllowedComponent } from './AllowedComponent';
import { getStorage } from '@utils/local-store';
import { LS_KEYS } from '@constants/local-store';

export const AppRouter = () => {
  const buildRoute = (route: RouteType): ReactNode | null => {
    if (route === undefined || null) return null;

    const {
      id,
      children,
      path,
      element,
      redirection,
      permissions,
      index: idx,
    } = route;

    const isToken = 'token'; //getStorage(LS_KEYS.AUTH_TOKEN);

    return idx ? (
      <Route
        index
        key={id}
        element={AllowedComponent(
          element,
          redirection,
          permissions,
          isToken as string,
        )}
      />
    ) : (
      <Route
        path={path}
        key={id}
        element={AllowedComponent(
          element,
          redirection,
          permissions,
          isToken as string,
        )}
      >
        {children ? (
          children.length && children.map((child) => buildRoute(child))
        ) : (
          <></>
        )}
      </Route>
    );
  };

  return <Routes>{routes.map((route: RouteType) => buildRoute(route))}</Routes>;
};
