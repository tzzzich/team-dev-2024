import React from 'react';
import { Alert } from 'react-bootstrap';

const RequestIndicator = ({ name, role }) => {

    const variant = role == 'Student' ? 'primary' : 'success';
    const roleDisplay = role == 'Student' ? 'Студент' : 'Преподаватель';

  return (
    <Alert variant={variant} style={{ fontSize: '12px', padding: '8px' }}>
        <h6 style={{ fontSize: '0.85rem'}}>{name}</h6>
        {roleDisplay}
    </Alert>
  );
};

export default RequestIndicator;
