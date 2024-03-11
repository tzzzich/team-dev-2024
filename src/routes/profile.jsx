import { useState } from 'react';
import {Button, Form, Row, Card} from 'react-bootstrap';
import { useGetApi } from "../api/hook/index";
import { axiosPatchProfile } from '../api/request';

import PhoneNumber from '../components/form-validation/PhoneNumber';
import { URL_API } from '../utils/constants/urlApi';
import { axiosLogOut } from '../api/request/axiosLogOut';

function ProfilePage () {
    const [data, loading, error] = useGetApi(null, URL_API.PROFILE_URL);
    const [validated, setValidated] = useState(false);
    const [patchError, setErrors] = useState('');


    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.stopPropagation();
        } else {
            setValidated(true);
            const errorText = await axiosPatchProfile(event);
            setErrors(errorText);
        }
    };

  return (
    <div className="vh-100 d-flex flex-column justify-content-center align-items-center"> 
    {loading ? (
        <h2 className="text-center mt-4">Loading...</h2>
      ) : error ? (
        <h2 className="text-center mt-4">Что-то пошло не так.</h2>
      ) : (
        <Card className='w-75' style={{maxWidth:'33em'}}>
            <Card.Body>
                <Card.Title><h2>Профиль</h2></Card.Title>
                <h6 className="text-danger mt-3">{patchError}</h6>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group controlId="fullName">
                            <Form.Label>ФИО</Form.Label>
                            <Form.Control 
                                type="text"
                                placeholder="Иванов Иван Иванович"
                                defaultValue={data.fullName}
                                required
                                name="fullName" />
                            <Form.Control.Feedback type="invalid">
                                Пожалуйста, введите имя.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <PhoneNumber baseValue = {data.phone} name="phone"/>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control 
                                type="email"
                                placeholder="user@example.com" 
                                defaultValue={data.email}
                                required
                                name="email" />
                            <Form.Control.Feedback type="invalid">
                                Не соответствует формату Email.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <div className="d-grid mt-2 gap-2">
                        <Button type='submit' variant="primary">
                            Сохранить
                        </Button>
                        <Button type='button' variant="danger" onClick={axiosLogOut}>
                            Выйти
                        </Button>
                    </div>
                </Form>
            </Card.Body>
        </Card>)}
    </div>
  );
}

export default ProfilePage;