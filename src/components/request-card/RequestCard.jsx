import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RoleTag from './RoleTag';

const RequestCard = () => {

  const requestData = {
    date: '30.02.2024',
    lessonNumber: '2nd Lesson',
    startTime: '10:35 AM',
    endTime: '12:10 PM',
    role: 'Student'
  };
  
  return (
    <div className="flex-grow-1" style={{position: 'relative'}}>
      <Card>
        <Card.Body>
        <Card.Title>Иванов Иван Иванович</Card.Title>
          <Row className="mb-2">
            <Col>
              <Card.Text className="text-muted">
                <strong>
                  <img
                  src="src/assets/building.svg"
                  alt="Аудитория:"
                  style={{height: '1.15rem', marginRight: '0.5rem'}}
                  />
                </strong>
                239 (2) Компьютерный класс ВИТШ
              </Card.Text>
              </Col>
          </Row>
          <Row>
            <Col  xs ="auto" className="d-flex align-items-center">
              <Card.Text className="text-muted">
                <strong>
                <img
                  src="src/assets/calendar.svg"
                  alt="Дата: "
                  style={{height: '1.25rem'}}
                  />
                </strong> {requestData.date}
              </Card.Text>
            </Col>
            <Col  xs ="auto" className="d-flex align-items-center">
              <Card.Text className="text-muted">
                <strong>
                <img
                  src="src/assets/clock.svg"
                  alt="Время: "
                  style={{height: '1.15rem', marginRight: '0.25rem'}}
                  />
                  </strong> {requestData.startTime} - {requestData.endTime}
              </Card.Text>
            </Col>
            <Col className="d-flex justify-content-end">
                <Button variant="link">
                  <img
                  src="src/assets/box-arrow-up-right.svg"
                  alt="Logo"
                  style={{height: '1.25rem'}}
                  />
                </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <RoleTag className='teacher'/>
    </div>
  )
}

export default RequestCard
