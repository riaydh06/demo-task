import { ROUTES } from '@constants/routes';

import Home from '@containers/Home';
import Layout from '@containers/layout';
import NoMatch from '@containers/no-match';

import { RouteType } from './types';

const routes: RouteType[] = [
  {
    id: '1',
    path: `${ROUTES.HOME}`,
    element: <Layout />,
    redirection: <NoMatch />,
    permissions: {
      auth: ['token'],
    },
    children: [
      {
        id: '1.1',
        index: true,
        element: <Home />,
        redirection: <NoMatch />,
        permissions: {
          auth: ['token'],
        },
      },

      {
        id: '1.3',
        path: `${ROUTES.SIGN_UP}`,
        element: <NoMatch />,
      },
    ],
  },
  {
    id: '2',
    path: '*',
    element: <NoMatch />,
  },
];

export { routes };
