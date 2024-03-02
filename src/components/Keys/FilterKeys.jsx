import { useState } from "react"
import { Button, Card, Col, Form, Modal, Row } from "react-bootstrap"

const FilterKeys = () => {
    const [showCreateKey, setShowCreateKey] = useState(false)

    const handleCloseCreateKey = () => setShowCreateKey(false)
    const handleShowCreateKey = () => setShowCreateKey(true)

    return (
        <>
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
                                <Button variant="success" type="button" onClick={handleShowCreateKey}>Создать ключ</Button>
                                <Button variant="primary" type="submit">Применить</Button>
                            </Col>
                        </Row>
                    </Form>
                </Card.Body>
            </Card>

            <Modal centered show={showCreateKey} onHide={handleCloseCreateKey}>
                <Modal.Body>
                    <Modal.Title className="text-center mb-3">Создать ключ</Modal.Title>
                    <Form>
                        <Form.Control placeholder="Введите кабинет" type="text" className="mb-3"></Form.Control>
                        <Row>
                            <Col className="d-grid">
                                <Button variant="success" type="submit" onClick={handleCloseCreateKey}>Создать</Button>
                            </Col>
                            <Col className="d-grid">
                                <Button variant="danger" type="button" onClick={handleCloseCreateKey}>Отменить</Button>
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default FilterKeys