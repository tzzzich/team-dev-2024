import { useState } from 'react';
import {Button, Form, Row, Card} from 'react-bootstrap';
import { axiosRegister } from '../api/request/axiosRegister';

import Password from "../components/form-validation/Password";
import PhoneNumber from '../components/form-validation/PhoneNumber';

function RegistrationPage () {
    const [validated, setValidated] = useState(false);
    const [error, setErrors] = useState('')
    

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.stopPropagation();
        } else {
            setValidated(true);
            const errorText = await axiosRegister(event);
            setErrors(errorText);
        }
    };

  return (
    <div className="vh-100 d-flex flex-column justify-content-center align-items-center"> 
        <Card className='w-75' style={{maxWidth:'33em'}}>
            <Card.Body>
                <Card.Title><h2>Регистрация</h2></Card.Title>
                <h6 className="text-danger mt-3">{error}</h6>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group controlId="fullName">
                            <Form.Label>ФИО</Form.Label>
                            <Form.Control
                            type="text"
                            placeholder="Иванов Иван Иванович"
                            required
                            name="fullName"
                            />
                            <Form.Control.Feedback type="invalid">
                            Пожалуйста, введите имя.
                            </Form.Control.Feedback>
                        </Form.Group>
                        </Row>
                        <Row className="mb-3">
                        <PhoneNumber name="phoneNumber" />
                        </Row>
                        <Row className="mb-3">
                        <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                            type="email"
                            placeholder="user@example.com"
                            required
                            name="email"
                            />
                            <Form.Control.Feedback type="invalid">
                            Не соответствует формату Email.
                            </Form.Control.Feedback>
                        </Form.Group>
                        </Row>
                        <Row className="mb-3">
                        <Password name="password" />
                        </Row>
                        <div className="d-grid mt-2">
                        <Button type='submit' variant="primary">
                            Зарегистрироваться
                        </Button>
                        </div>
                </Form>
            </Card.Body>
        </Card>
    </div>
  );
}

export default RegistrationPage;