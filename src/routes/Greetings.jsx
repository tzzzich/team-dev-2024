import { Button } from "react-bootstrap"

const Greetings = () => {
    return (
        <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
            <img src="/src/assets/Hello.jpg" className="img-fluid"></img>
            <h1 className="text-center">Добро пожаловать</h1>
            <h3 className="text-center text-muted">Перед тем как продолжить войдите или зарегестрируйтесь</h3>
            <div className="d-flex flex-wrap gap-2 justify-content-center mt-3">
                <Button type="button" variant="primary" size="lg">Вход</Button>
                <Button type="button" variant="primary" size="lg">Регистрация</Button>
            </div>
        </div>
    )
}

export default Greetings