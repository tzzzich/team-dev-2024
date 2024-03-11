import { useEffect, useState } from "react";

export const useGetParams = (size) => {
    const [pageSize, setPageSize] = useState(size);
    const [params, setParams] = useState('');

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        searchParams.delete("pageNumber");

        if (searchParams.has('pageSize')) {
            searchParams.set('pageSize', pageSize);
        } else {
            searchParams.append('pageSize', pageSize);
        }

        const updatedParams = searchParams.toString();
        setParams(updatedParams);
    }, [pageSize]);

    return [params, pageSize, setPageSize];
};