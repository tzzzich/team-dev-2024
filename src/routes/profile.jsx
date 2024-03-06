import { useState } from 'react';
import {Button, Col, Form, InputGroup, Row, Card} from 'react-bootstrap';
import InputMask from 'react-input-mask';

import PhoneNumber from '../components/form-validation/PhoneNumber';

function ProfilePage () {
    
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
                <Card.Title><h2>Профиль</h2></Card.Title>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group controlId="fullName">
                            <Form.Label>ФИО</Form.Label>
                            <Form.Control 
                                type="text"
                                placeholder="Иванов Иван Иванович"
                                value="Иванов Иван Иванович"
                                required />
                            <Form.Control.Feedback type="invalid">
                                Пожалуйста, введите имя.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <PhoneNumber baseValue = "+7 (999) 999-99-99"/>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control 
                                type="email"
                                placeholder="user@example.com" 
                                value="user@example.com" 
                                required />
                            <Form.Control.Feedback type="invalid">
                                Не соответствует формату Email.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <div className="d-grid mt-2">
                        <Button type='submit' variant="primary">
                            Сохранить
                        </Button>
                    </div>
                </Form>
            </Card.Body>
        </Card>
    </div>
  );
}

export default ProfilePage;