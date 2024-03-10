import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';

const Notification = () => {
    

    return (
        <Badge pill bg="danger" 
              style={{
                position: 'absolute',
                top: '5px',
                right: '5px',
              }}
            >
            {Math.floor(Math.random() * 10) + 1}
        </Badge>
    );
};

export default Notification;