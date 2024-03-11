import { Card, Col } from "react-bootstrap"

const LockCard = ({intervalStart, intervalEnd}) => {
    const getDate = (date) => {
        return (date.substring(0, date.indexOf("T"))
        + " " + date.substring(date.indexOf("T") + 1, date.indexOf("T") + 6))
    }

    return (
        <Col lg={4} md={6} className="mt-4">
            <Card bg="secondary" text="white">
                <Card.Body>
                    <Card.Text>Начало Блокировки: {getDate(intervalStart)}</Card.Text>
                    <Card.Text>Конец Блокировки: {getDate(intervalEnd)}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default LockCard