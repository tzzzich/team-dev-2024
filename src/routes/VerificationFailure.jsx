import { Button } from "react-bootstrap"

const VerificationFailure = () => {
    return (
        <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
            <img src="/src/assets/Faile.jpg" className="img-fluid"></img>
            <h1 className="text-center">Верификация не пройдена</h1>
            <h3 className="text-center text-muted">Мы не смогли подтвердить что вы являетесь сотрудником деканата. Доступ закрыт</h3>
            <Button type="button" variant="danger" className="mt-3" size="lg">Выйти</Button>
        </div>
    )
}

export default VerificationFailure