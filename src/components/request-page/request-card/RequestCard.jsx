import {Card, Row, Col} from 'react-bootstrap';
import RoleTag from '../../RoleTag';
import {IMAGES} from '/src/utils/constants/images.js';

import RequestInfoModal from '../RequestInfoModal.jsx';

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
                  <img
                  src= {IMAGES.BUILDING}
                  alt="Аудитория:"
                  style={{height: '1.15rem', marginRight: '0.5rem'}}
                  />
                239 (2) Компьютерный класс ВИТШ
              </Card.Text>
              </Col>
          </Row>
          <Row>
            <Col  xs ="auto" className="d-flex align-items-center">
              <Card.Text className="text-muted">
                <img
                  src= {IMAGES.CALENDAR}
                  alt="Дата: "
                  style={{height: '1.25rem', marginRight: '0.25rem'}}
                  />
                   {requestData.date}
              </Card.Text>
            </Col>
            <Col  xs ="auto" className="d-flex align-items-center">
              <Card.Text className="text-muted">
                <img
                  src= {IMAGES.CLOCK}
                  alt="Время: "
                  style={{height: '1.15rem', marginRight: '0.25rem'}}
                  /> {requestData.startTime} - {requestData.endTime}
              </Card.Text>
            </Col>
            <Col className="d-flex justify-content-end">
                <RequestInfoModal />
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <RoleTag role='Teacher'/>
    </div>
  )
}

export default RequestCard
