import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';

function NavbarComponent({ isAuth }) {
  return (
    <Navbar expand="md" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="src/assets/tsu.svg"
            alt="Logo"
            style={{marginRight: '10px'}}
          />
          TSU.KeyTime
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            {isAuth ? (
              <>
                <Nav.Link href="/">Заявки</Nav.Link>
                <Nav.Link href="/keys">Ключи</Nav.Link>
                <Nav.Link href="/timetable">Расписание</Nav.Link>
              </>
            ) : null }
          </Nav>

          <Nav className="ms-auto">
            <Nav.Link  href='/login'>
                {isAuth ? 'Выйти' : 'Войти'}
            </Nav.Link>            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;