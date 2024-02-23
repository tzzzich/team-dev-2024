import Pagination from 'react-bootstrap/Pagination';

const PaginationNumber = ({numbers, currentPage, maxPage}) => {
    return (
        <div className="d-flex justify-content-between flex-wrap">
            <Pagination className='m-0 mb-4'>
                <Pagination.First href={`?page=${currentPage - 1 > 1 ? currentPage - 1 : 1}`} />
                {numbers.map((num) => (
                    <Pagination.Item key={num} href={`?page=${num}`} active={currentPage === num}>{num}</Pagination.Item>
                ))}
                <Pagination.Last href={`?page=${currentPage + 1 < maxPage ? currentPage + 1 : maxPage}`}/>
            </Pagination>
            <input type='text' min={0} value={15} className='mb-4'></input>
        </div>
    )
}

export default PaginationNumber