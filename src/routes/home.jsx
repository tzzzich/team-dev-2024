import Greetings from "./Greetings"
import VerificationFailure from "./VerificationFailure"
import VerificationWait from "./VerificationWait"
import RequestPage from "./requestPage"

const Home = () => {
    //const user = {"verification": true}
    const user = undefined

    return (
        <>
            {user === undefined ? (
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
