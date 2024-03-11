import { Button } from "react-bootstrap"
import { axiosLogOut } from "../api/request/axiosLogOut"

const VerificationWait = () => {
    return (
        <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
            <img src="/src/assets/Wait.jpg" className="img-fluid"></img>
            <h1 className="text-center">Верификация в процессе</h1>
            <h3 className="text-center text-muted">Мы должны удостовериться, что вы являетесь сотрудником деканата</h3>
            <Button type="button" variant="danger" className="mt-3" size="lg" onClick={axiosLogOut}>Выйти</Button>
        </div>
    )
}

export default VerificationWait