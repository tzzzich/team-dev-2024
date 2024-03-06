import React, { useState } from 'react';
import { Row, Form } from 'react-bootstrap';
import InputMask from 'react-input-mask';

const PhoneNumber = ({baseValue}) => {
  const [phoneNumber, setPhoneNumber] = useState(baseValue || '');
  const [inputClassName, setClassName] = useState(`form-control`);

  const isPhoneNumberComplete = () => {
    const emptyDigit = phoneNumber.match(/_/g);
    if (emptyDigit === null) {return true;}
    return emptyDigit.length === 10;
  };



  const handleChange = (e) => {
    setPhoneNumber(e.target.value);
    setClassName(`form-control ${
        !isPhoneNumberComplete() ? 'is-invalid' : 'is-valid'
      }`
    )
  };

  return (
      <Form.Group controlId="phone">
        <Form.Label>Телефон</Form.Label>
        <InputMask
            mask="+7 (999) 999-99-99"
            maskChar="_"
            type="tel"
            placeholder="+7 (XXX) XXX-XX-XX"
            value={phoneNumber}
            onChange={handleChange}
            className={inputClassName}
        />
        <Form.Control.Feedback type="invalid">
          Пожалуйста, введите полный номер телефона.
        </Form.Control.Feedback>
      </Form.Group>
  );
};

export default PhoneNumber;
