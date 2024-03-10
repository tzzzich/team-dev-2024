import { Row } from "react-bootstrap";
import KeyCard from "/src/components/Keys/KeyCard.jsx";
import FilterKeys from "../components/Keys/FilterKeys";
import PaginationNumber from "../components/PaginationNumber";
import { useGetApi } from "../api/hook/index";
import { URL_API } from "../utils/constants/urlApi";


const KeysPage = () => {
  /*const keysDataList = Array.from({ length: 15 }, (_, index) => ({
    numberKey: "9309706",
    fullName: "Иванов Иван Иванович",
    userRole: 'Student'
  }));

  const numbers = [1, 2, 3]*/

  const [data, loading, error] = useGetApi(null, URL_API.KEYS_URL)

  return (
    <div style={{ width: '80%', margin: '0 auto'}}>
      {loading ? (
        <h2 className="text-center mt-4">Loading...</h2>
      ) : error ? (
        <h2 className="text-center mt-4">Что-то пошло не так.</h2>
      ) : (
        <>
          <FilterKeys />
          <Row className="mb-4">
            {data.keys.map((key) => (
                <KeyCard {...key}/>
            ))}
          </Row>
          <PaginationNumber {...data.pagination}/>
        </>
      )}
    </div>
  )
}

export default KeysPage