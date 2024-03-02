import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Root } from './routes/root';
import { ROUTES } from './utils/constants/router';  
import Home from './routes/home';
import KeysPage from './routes/KeysPage';
import BlockingHistory from './routes/BlockingHistory';
import VerificationPage from './routes/VerificationPage';

const router = createBrowserRouter([
  {
    path:  ROUTES.ROOT,
    element: <Root />,
    children: [
      {
        path: ROUTES.ROOT,
        element: <Home />,
      },
      {
        path: ROUTES.KEYS,
        element: <KeysPage />
      },
      {
        path: ROUTES.LOCK,
        element: <BlockingHistory />
      },
      {
        path: ROUTES.VERIFICATION,
        element: <VerificationPage />
      }
    ],
  },
  
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);