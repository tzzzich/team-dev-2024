import { Container } from 'react-bootstrap';
import RequestCard from '/src/components/request-card/RequestCard.jsx';
import RequestFilter from '/src/components/RequestFilter.jsx';

const Home = () => {

  const requestDataList = Array.from({ length: 10 }, (_, index) => ({
    date: "30.02.2024",
    startTime: `10:35 AM`,
    endTime: `12:10 PM`
  }));

  return (
    <div className="d-flex flex-row flex-wrap justify-content-space-evenly gap-4 " style={{ width: '70%', margin: '0 auto' }}>
      <RequestFilter />
      {requestDataList.map((index) => (
        <RequestCard key={index} />
      ))}
    </div>
  );
}

export default Home