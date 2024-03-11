import { useParams } from "react-router-dom";
import LockCard from "../components/Lock/LockCard";
import { Row } from "react-bootstrap";
import { useGetApi } from "../api/hook/index";
import { URL_API } from "../utils/constants/urlApi";

const BlockingHistory = () => {
    const {lockId} = useParams()
    const [data, loading, error] = useGetApi(null, URL_API.KEY_URL + lockId + '/locking')

    return (
        <div style={{ width: '80%', margin: '0 auto'}}>
            {loading ? (
                <h2 className="text-center mt-4">Loading...</h2>
            ) : error ? (
                <h2 className="text-center mt-4">Что-то пошло не так.</h2>
            ) : (
                <>
                    <h2 className="text-center mt-4">Ключ {data.auditory}</h2>
                    <Row className="mb-4">
                        {data.lockings.length > 0 ? data.lockings.map((lock) => (
                            <LockCard {...lock}/>
                        )) : (
                            <h1 className="text-center mt-4">Блокировок нет.</h1>
                        )}
                    </Row>
                </>
            )}
        </div>
    )
}

export default BlockingHistory