import { useState } from 'react';
import {Button, Col, Form, InputGroup, Row, Card} from 'react-bootstrap';

import Password from "../components/form-validation/Password";

function LoginPage() {
    
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };

  return (
    <div className="vh-100 d-flex flex-column justify-content-center align-items-center"> 
        <Card className='w-75' style={{maxWidth:'33em'}}>
            <Card.Body>
                <Card.Title><h2>Вход</h2></Card.Title>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                <Form.Group controlId="validationCustom01">
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                            type="email"
                            placeholder="user@example.com" required />
                        <Form.Control.Feedback type="invalid">
                            Не соответствует формату Email.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Password />
                </Row>
                <div className="d-grid gap-2">
                    <Button type='submit' variant="primary">
                        Войти
                    </Button>
                    <Button href="/registration" variant="secondary">
                        Регистрация
                    </Button>
                </div>
                </Form>
            </Card.Body>
        </Card>
    </div>
  );
}

export default LoginPage;