import Pagination from 'react-bootstrap/Pagination';

const PaginationNumber = ({numbers}) => {
    return (
        <div className="d-flex justify-content-between flex-wrap">
            <Pagination className='m-0 mb-4'>
                <Pagination.First />
                {numbers.map((num) => (
                    <Pagination.Item key={num}>{num}</Pagination.Item>
                ))}
                <Pagination.Last />
            </Pagination>
            <input type='text' min={0} value={15} className='mb-4'></input>
        </div>
    )
}

export default PaginationNumber