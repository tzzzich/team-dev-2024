import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Root } from './routes/root';
import { ROUTES } from './utils/constants/router';  
import Home from './routes/home';
import KeysPage from './routes/KeysPage';

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