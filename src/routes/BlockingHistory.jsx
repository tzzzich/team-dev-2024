import { useParams } from "react-router-dom";
import LockCard from "../components/Lock/LockCard";
import PaginationNumber from "../components/PaginationNumber";
import { Row } from "react-bootstrap";

const BlockingHistory = () => {
    const {lockId} = useParams()

    const LockDataList = Array.from({ length: 21 }, (_, index) => ({
        startBlocking: "2024-02-11T17:00:00.000Z",
        endBlocking: "2024-02-17T16:59:59.999Z"
    }));
    
    const numbers = [1, 2, 3]

    return (
        <div style={{ width: '80%', margin: '0 auto'}}>
            <h2 className="text-center mt-4">Ключ {lockId}</h2>
            <Row className="mb-4">
                {LockDataList.map((lock) => (
                    <LockCard {...lock}/>
                ))}
            </Row>
            <PaginationNumber numbers={numbers} currentPage={2} maxPage={3}/>
        </div>
    )
}

export default BlockingHistory