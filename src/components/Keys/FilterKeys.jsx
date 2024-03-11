import { useState } from "react"
import { Button, Card, Col, Form, Modal, Row } from "react-bootstrap"
import { axiosKeys } from "../../api/request/index"
import { URL_API } from "../../utils/constants/urlApi"
import { useAllParams } from "../../api/hook/index.js"

const FilterKeys = () => {
    const [showCreateKey, setShowCreateKey] = useState(false)
    const [data, setData] = useAllParams({})
    const [error, setErrors] = useState('')

    const handleCloseCreateKey = () => setShowCreateKey(false)
    const handleShowCreateKey = () => setShowCreateKey(true)

    const handleCreateKey = async(event) => {
        event.preventDefault()
        const errorText = await axiosKeys(event, URL_API.CREATE_KEY_URL)
        setErrors(errorText)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const searchParams = new URLSearchParams(window.location.search);
        const pageSize = document.getElementById('size').value

        if (searchParams.has('auditory')) {
            searchParams.set('auditory', data['auditory'] !== undefined ? data['auditory'] : "");
        } else {
            searchParams.append('auditory', data['auditory'] !== undefined ? data['auditory'] : "");
        }

        if (searchParams.has('ownerName')) {
            searchParams.set('ownerName', data['ownerName'] !== undefined ? data['ownerName'] : "");
        } else {
            searchParams.append('ownerName', data['ownerName'] !== undefined ? data['ownerName'] : "");
        }

        if (searchParams.has("pageNumber")) {
            searchParams.set('pageNumber', 1);
        }

        if (searchParams.has('pageSize')) {
            searchParams.set('pageSize', pageSize !== undefined ? pageSize : 15);
        } else {
            searchParams.append('pageSize', pageSize !== undefined ? pageSize : 15);
        }

        window.location.href = window.location.pathname + '?' + searchParams.toString()
    }

    return (
        <>
            <Card className="mt-4">
                <Card.Header>Фильтр Ключей</Card.Header>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col md={6} lg={9}>
                                <Form.Group className="mb-2">
                                    <Form.Label>Номер кабинета</Form.Label>
                                    <Form.Control type="text"
                                    name="auditory"
                                    value={data['auditory']}
                                    onChange={(e) => {setData({...data, auditory: e.target.value})}}/>
                                </Form.Group>
                                <Form.Group className="mb-2">
                                    <Form.Label>ФИО</Form.Label>
                                    <Form.Control type="text"
                                    name="ownerName"
                                    value={data['ownerName']}
                                    onChange={(e) => {setData({...data, ownerName: e.target.value})}}/>
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
                    <Form onSubmit={handleCreateKey}>
                        <Form.Control placeholder="Введите кабинет" type="text" className="mb-3" name="auditory"></Form.Control>
                        <Row>
                            <Col className="d-grid">
                                <Button variant="success" type="submit">Создать</Button>
                            </Col>
                            <Col className="d-grid">
                                <Button variant="danger" type="button" onClick={handleCloseCreateKey}>Отменить</Button>
                            </Col>
                        </Row>
                    </Form>
                    <h6 className="text-danger mt-3">{error}</h6>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default FilterKeys