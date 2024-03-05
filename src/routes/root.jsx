import { Outlet } from 'react-router';

import  NavbarComponent   from '/src/components/header/Navbar.jsx';

export const Root = () => {
  console.log(localStorage.getItem('token'));
  return (
    <>
      <NavbarComponent isAuth = {localStorage.getItem('token') == null} />
      <Outlet />
    </>
  );
}

