import { useState } from 'react';
import {Button, Col, Form, InputGroup, Row, Card} from 'react-bootstrap';

const Password = ({name}) => {
    const [passwordError, setPasswordError] = useState('Пожалуйста, введите пароль.');

    
    const validatePassword = (event) => {
        const passwordInput = event.target;
        if (passwordInput.validity.valueMissing) {
          setPasswordError('Пожалуйста, введите пароль.');
        } else if (passwordInput.validity.tooShort) {
          setPasswordError('Пароль должен быть длиной не менее 6 символов.');
        } else if (passwordInput.validity.patternMismatch) {
          setPasswordError('Пароль должен содержать букву.');
        } else {
          setPasswordError('');
        }
      };
      
    return (
        <Form.Group controlId="password">
            <Form.Label>Пароль</Form.Label>
            <Form.Control
                type="password"
                placeholder="Password"
                minLength="6" 
                pattern="^(?=.*[a-zA-Z]).*$"
                onChange={validatePassword}
                required
                name={name}
            />
            <Form.Control.Feedback type="invalid">
            {passwordError}
            </Form.Control.Feedback>
        </Form.Group>
    )
  }
  
  export default Password