import Pagination from 'react-bootstrap/Pagination';
import { usePagination, useGetParams } from '../api/hook/index.js';
import { useState } from 'react';

const PaginationNumber = ({current, count, size}) => {
    const numbers = usePagination([], current, count)
    const [params, pageSize, setPageSize] = useGetParams(size)
    const [isSetSize, setIsSetSize] = useState(false)

    const handleSetSize = (e) => {
        setPageSize(e.target.value)
        setIsSetSize(true)
    }
    
    return (
        <div className="d-flex justify-content-between flex-wrap">
            {numbers.length > 0 ? (
                <>
                    <Pagination className='m-0 mb-4'>
                        <Pagination.First href={`?pageNumber=${isSetSize ? 1 : current - 1 > 1 ? current - 1 : 1}&${params}`} />
                        {numbers.map((num) => (
                            <Pagination.Item key={num} href={`?pageNumber=${isSetSize ? 1 : num}&${params}`} active={current === num}>{num}</Pagination.Item>
                        ))}
                        <Pagination.Last href={`?pageNumber=${isSetSize ? 1 : current + 1 < count ? current + 1 : count}&${params}`}/>
                    </Pagination>
                    <input type='text' id='size' min={0} value={pageSize} className='mb-4' onChange={handleSetSize}></input>
                </>
            ) : null}
        </div>
    )
}


export default PaginationNumber
