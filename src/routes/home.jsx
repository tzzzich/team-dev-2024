import RequestCard from '/src/components/request-page/request-card/RequestCard.jsx';
import RequestFilter from '/src/components/request-page/RequestFilter.jsx';
import PaginationNumber from "../components/PaginationNumber.jsx";

const Home = () => {

  const requestDataList = Array.from({ length: 10 }, (_, index) => ({
    date: "30.02.2024",
    startTime: `10:35 AM`,
    endTime: `12:10 PM`
  }));

  const numbers = [1, 2, 3]

  return (
    < div style={{ width: '80%', margin: '0 auto' }}>
      <div className="d-flex flex-row flex-wrap justify-content-space-evenly gap-4 mb-5">
        <RequestFilter />
        {requestDataList.map((index) => (
          <RequestCard key={index} />
        ))}
      </div>
      <PaginationNumber  numbers={numbers} currentPage={2} maxPage={3} />
    </div>
  );
}

export default Home