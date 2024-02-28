import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function RequestInfoModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

        <Button variant="link" onClick={handleShow}>
            <img
            src="src/assets/box-arrow-up-right.svg"
            alt="Подробнее"
            style={{height: '1.25rem'}}
            />
        </Button>

        <Modal 
            show={show} 
            onHide={handleClose} 
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Заявка номер 22032004</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ maxHeight: '400px', overflowY: 'auto' }}>
            <p><strong>ФИО</strong><br /> Иванов Иван Иванович </p>
            <p><strong>Кабинет</strong><br /> 302 </p>
            <p><strong>Дата</strong><br />30.02.2024</p>
            <p><strong>Время</strong><br /> 10:35-12:10 </p>
            <p><strong>2 пара</strong></p>
            <p><strong>Комментарий</strong><br /> Ну пожалуйста But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?
            </p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger">Отклонить</Button>
                <Button variant="success" onClick={handleClose}>
                Принять
                </Button>
            </Modal.Footer>
        </Modal>
    </>
  );
};

export default RequestInfoModal;