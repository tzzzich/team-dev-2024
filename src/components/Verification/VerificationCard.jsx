import { Button, Card, Col, Row } from "react-bootstrap"
import RoleTag from "../RoleTag"
import { useState } from "react"
import { axiosVerified } from "../../api/request/index"

const VerificationCard = ({id, fullName, verified, role}) => {
    const [userStatus, setStatus] = useState(verified)

    const handleStatus = (otherStatus) => {
        setStatus(otherStatus)
        axiosVerified(!otherStatus, id)
    }

    return (
        <Col lg={4} md={6} className="mt-4">
            <Card>
                <Card.Body>
                    <Card.Title>{fullName}</Card.Title>
                    <div className="d-flex justify-content-between flex-wrap mt-2 align-items-center gap-2">
                        <div>
                            {userStatus === null ? (
                                <Card.Text className="text-muted">Ожидает</Card.Text>
                            ) : userStatus === true ? (
                                <Card.Text className="text-success">Подтвержден</Card.Text>
                            ) : (
                                <Card.Text className="text-danger">Отклонен</Card.Text>
                            )}
                        </div>
                        <Row className="gap-2 px-2">
                            {userStatus === null ? (
                                <>
                                    <Col className="px-0">
                                        <Button variant="danger" type="button" onClick={() => handleStatus(false)}>Отклонить</Button>
                                    </Col>
                                    <Col className="px-0">
                                        <Button variant="success" type="button" onClick={() => handleStatus(true)}>Подтвердить</Button>
                                    </Col>
                                </>
                            ) : null}
                        </Row>
                    </div>
                </Card.Body>
                <RoleTag role={role}/>
            </Card>
        </Col>
    )
}

export default VerificationCard