import { useState } from "react"
import { Button, Card, Col, Modal, Form, Row} from "react-bootstrap"
import RoleTag from "../RoleTag"

const KeyCard = ({numberKey, fullName, userRole}) => {
    const [showLock, setShowLock] = useState(false)

    const handleCloseLock = () => setShowLock(false)
    const handleShowLock = () => setShowLock(true)

    return (
        <>
            <Col lg={4} md={6} className="mt-4">
                <Card>
                    <Card.Body>
                        <Card.Title>Ключ от кабинета {numberKey}</Card.Title>
                        <div className="d-flex justify-content-between flex-wrap mt-2 align-items-center">
                            <div>
                                <Card.Text className="text-muted">{fullName}</Card.Text>
                            </div>
                            <div>
                                <Button variant="link" className="px-0" onClick={handleShowLock}>
                                    <img src="src/assets/lock.svg"
                                    alt="lock"
                                    style={{height: '1.5rem'}}></img>
                                </Button>
                                <Button variant="link" className="px-0">
                                    <img src="src/assets/trash.svg"
                                    alt="trash"
                                    style={{height: '1.25rem'}}></img>
                                </Button>
                            </div>
                        </div>
                    </Card.Body>
                    <RoleTag role={userRole}/>
                </Card>
            </Col>

            <Modal centered show={showLock} onHide={handleCloseLock}>
                <Modal.Body>
                    <Modal.Title className="text-center mb-3">Заблокировать ключ {numberKey}</Modal.Title>
                    <Form>
                        <Form.Control placeholder="Дата и время начала блокировки" type="datetime-local" className="mb-3"></Form.Control>
                        <Form.Control placeholder="Дата и время конца блокировки" type="datetime-local" className="mb-3"></Form.Control>
                        <Row className="mb-3">
                            <Col className="d-grid">
                                <Button variant="warning" type="submit" onClick={handleCloseLock}>Заблокировать</Button>
                            </Col>
                            <Col className="d-grid">
                                <Button variant="danger" type="button" onClick={handleCloseLock}>Отменить</Button>
                            </Col>
                        </Row>
                        <Col className="d-grid">
                            <Button variant="success" type="button" onClick={handleCloseLock}>История блокировок</Button>
                        </Col>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default KeyCard