import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

function NavbarComponent({ isAuth }) {
  return (
    <Navbar expand="md" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="/src/assets/tsu.svg"
            alt="Logo"
            style={{marginRight: '10px'}}
          />
          TSU.KeyTime
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            {true ? (
              <>
                <Nav.Link as={Link} to="/requests" className={location.pathname === '/requests' ? 'active' : ''}>Заявки</Nav.Link>
                <Nav.Link as={Link} to="/keys" className={location.pathname === '/keys' ? 'active' : ''}>Ключи</Nav.Link>
                <Nav.Link as={Link} to="/timetable" className={location.pathname === '/timetable' ? 'active' : ''}>Расписание</Nav.Link>
                <Nav.Link as={Link} to="/verification" className={location.pathname === '/verification' ? 'active' : ''}>Верификация</Nav.Link>
              </>
            ) : null }
          </Nav>

          <Nav className="ms-auto">
            <Nav.Link  href={isAuth ? '/profile' : '/login'}>
                {isAuth ? 'Иванов Иван Иванович' : 'Войти'}
            </Nav.Link>            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;