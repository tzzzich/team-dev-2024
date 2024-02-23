import { Button, Card, Col} from "react-bootstrap"
import RoleTag from "../RoleTag"

const KeyCard = ({numberKey, fullName, userRole}) => {
    return (
        <Col lg={4} md={6} className="mt-4">
            <Card>
                <Card.Body>
                    <Card.Title>Ключ от кабинета {numberKey}</Card.Title>
                    <div className="d-flex justify-content-between flex-wrap mt-2 align-items-center">
                        <div>
                            <Card.Text className="text-muted">{fullName}</Card.Text>
                        </div>
                        <div>
                            <Button variant="link" className="px-0">
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
    )
}

export default KeyCard