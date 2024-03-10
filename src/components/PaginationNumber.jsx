import Pagination from 'react-bootstrap/Pagination';
import { usePagination } from '../api/hook/index.js';

const PaginationNumber = ({current, count, size}) => {
    const numbers = usePagination([], current, count)
    const searchParams = new URLSearchParams(window.location.search)
    searchParams.delete("pageNumber")
    const params = searchParams.toString()
    
    return (
        <div className="d-flex justify-content-between flex-wrap">
            {numbers.length > 0 ? (
                <>
                    <Pagination className='m-0 mb-4'>
                        <Pagination.First href={`?pageNumber=${current - 1 > 1 ? current - 1 : 1}&${params}`} />
                        {numbers.map((num) => (
                            <Pagination.Item key={num} href={`?pageNumber=${num}&${params}`} active={current === num}>{num}</Pagination.Item>
                        ))}
                        <Pagination.Last href={`?pageNumber=${current + 1 < count ? current + 1 : count}&${params}`}/>
                    </Pagination>
                    <input type='text' min={0} value={size} className='mb-4'></input>
                </>
            ) : null}
        </div>
    )
}


export default PaginationNumber
