import { Row } from "react-bootstrap";
import KeyCard from "/src/components/Keys/KeyCard.jsx";
import FilterKeys from "../components/Keys/FilterKeys";
import PaginationNumber from "../components/PaginationNumber";


const KeysPage = () => {
  const keysDataList = Array.from({ length: 90 }, (_, index) => ({
    numberKey: "9309706",
    fullName: "Иванов Иван Иванович",
    userRole: 'Student'
  }));

  const numbers = [1, 2, 3, 4, 5]

  return (
    <div style={{ width: '80%', margin: '0 auto'}}>
      <FilterKeys />
      <Row className="mb-4">
        {keysDataList.map((key) => (
            <KeyCard {...key}/>
        ))}
      </Row>
      <PaginationNumber numbers={numbers}/>
    </div>
  )
}

export default KeysPage