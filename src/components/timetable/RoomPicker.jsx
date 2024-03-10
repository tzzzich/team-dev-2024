
import React from 'react';
import {Button, Card, Col, Form, Row} from 'react-bootstrap';

const RoomPicker = () => {
    return(
        <div>
            <Form className='m-4 '>
                <Form.Group as={Col} md="6">
                    <Form.Select >
                    <option >Кабинет 100500</option>
                    <option >Кабинет 123456</option>
                    <option >Кабинет 654321</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group as={Col} md="6" className="mt-2 ">
                    <Row>
                        <Col>
                        <Button className="w-100 mb-2">
                            Предыдущая неделя
                        </Button>
                        </Col>
                        <Col>
                        <Button className="w-100">
                            Следющая неделя
                        </Button>
                        </Col>
                    </Row>
                </Form.Group>
            </Form>
        </div>
    );
};

export default RoomPicker;
