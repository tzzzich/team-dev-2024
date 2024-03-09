import { useProfile } from "../api/hook/index.js"
import Greetings from "./Greetings"
import VerificationFailure from "./VerificationFailure"
import VerificationWait from "./VerificationWait"
import RequestPage from "./request-page"

const Home = () => {
    const user = useProfile(null)

    return (
        <>
            {user === null ? (
                <Greetings />
            ) : user.verification === null ? (
                <VerificationWait />
            ) : user.verification === true ? (
                <RequestPage />
            ) : (
                <VerificationFailure />
            )}
        </>
    )
}

export default Home
