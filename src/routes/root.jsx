import { Outlet } from 'react-router';

import  Header   from '/src/components/Header.jsx';

export const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

