import { Row } from "react-bootstrap"
import VerificationCard from "../components/Verification/VerificationCard";
import PaginationNumber from "../components/PaginationNumber";

const VerificationPage = () => {
    const verificationDataList = Array.from({ length: 21 }, (_, index) => ({
        fullName: "Иванов Иван Иванович",
        status: "Expect",
        userRole: "Dean"
    }));
    
    const numbers = [1, 2, 3]

    return (
        <div style={{ width: '80%', margin: '0 auto'}}>
            <h2 className="text-center mt-4">Верификация</h2>
            <Row className="mb-4">
                {verificationDataList.map((ver) => (
                    <VerificationCard {...ver} />
                ))}
            </Row>
            <PaginationNumber numbers={numbers} currentPage={2} maxPage={3}/>
        </div>
    )
}

export default VerificationPage