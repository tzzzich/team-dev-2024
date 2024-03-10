import { Row } from "react-bootstrap"
import VerificationCard from "../components/Verification/VerificationCard";
import PaginationNumber from "../components/PaginationNumber";
import { useGetApi } from "../api/hook/index.js";
import { URL_API } from "../utils/constants/urlApi";

const VerificationPage = () => {
    const [data, loading, error] = useGetApi(null, URL_API.VERIFIED_USERS)

    return (
        <div style={{ width: '80%', margin: '0 auto'}}>
            {loading ? (
                <h2 className="text-center mt-4">Loading...</h2>
            ) : error ? (
                <h2 className="text-center mt-4">Что-то пошло не так.</h2>
            ) : (
                <>
                    <h2 className="text-center mt-4">Верификация</h2>
                    <Row className="mb-4">
                        {data.users.map((ver) => (
                            <VerificationCard {...ver} />
                        ))}
                    </Row>
                    <PaginationNumber {...data.pagination}/>
                </>
            )}
        </div>
    )
}

export default VerificationPage