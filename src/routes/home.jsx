import { useGetApi} from "../api/hook/index.js"
import { URL_API } from "../utils/constants/urlApi.js"
import Greetings from "./Greetings"
import VerificationFailure from "./VerificationFailure"
import VerificationWait from "./VerificationWait"
import RequestPage from "./request-page"

const Home = () => {
    const [data] = useGetApi(null, URL_API.PROFILE_URL)

    return (
        <>
            {data === null ? (
                <Greetings />
            ) : data.verified === null && data.role === "Dean" ? (
                <VerificationWait />
            ) : data.verified === true && data.role === "Dean" ? (
                <RequestPage />
            ) : (
                <VerificationFailure />
            )}
        </>
    )
}

export default Home
