import { Button, Card, Col, Form, Row } from "react-bootstrap"

const FilterKeys = () => {
    return (
        <Card className="mt-4">
            <Card.Header>Фильтр Ключей</Card.Header>
            <Card.Body>
                <Form>
                    <Row>
                        <Col md={6} lg={9}>
                            <Form.Group className="mb-2">
                                <Form.Label>Номер кабинета</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                            <Form.Group className="mb-2">
                                <Form.Label>ФИО</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                        </Col>
                        <Col md={6} lg={3} className="d-grid gap-2">
                            <Button variant="success">Создать ключ</Button>
                            <Button variant="primary" type="submit">Применить</Button>
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default FilterKeys