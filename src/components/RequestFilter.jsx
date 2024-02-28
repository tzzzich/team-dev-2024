import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function RequestFilter() {
  return (
    <Form style={{width: '100%'}}>
      <Row className="mb-3">
      <Form.Group as={Col}>
          <Form.Label>Кабинет</Form.Label>
          <Form.Control
            type="text"
            placeholder="302"
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>ФИО</Form.Label>
          <Form.Control
            type="text"
            placeholder="Иванов Иван Иванович"
          />
        </Form.Group>
        <Form.Group as={Col} md="3">
          <Form.Label>Роль автора</Form.Label>
          <Form.Select >
            <option >Выберите роль</option>
            <option >Преподаватель</option>
            <option >Ученик</option>
          </Form.Select>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="2">
          <Form.Label>Время начала</Form.Label>
          <Form.Control type="datetime-local"/>
        </Form.Group>
        <Form.Group as={Col} md="2">
          <Form.Label>Время конца</Form.Label>
          <Form.Control type="datetime-local"/>
        </Form.Group>
        <Form.Group as={Col} md="5">
          <Form.Label>Сортировка</Form.Label>
          <Form.Select>
            <option >По времени создания (сначала старые)</option>
            <option >По времени создания (сначала новые)</option>
            <option >По времени бронирования (сначала раньше)</option>
            <option >По времени бронирования (сначала позже)</option>
          </Form.Select>
        </Form.Group>
        <Col className="d-flex align-items-center justify-content-center">
        <Button type="submit">Применить</Button>
        </Col>
      </Row>
    </Form>
  );
}

export default RequestFilter;