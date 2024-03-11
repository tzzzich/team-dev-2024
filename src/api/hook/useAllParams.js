import { useState, useEffect } from "react";

export const useAllParams = (defaultValue) => {
    const [data, setData] = useState(defaultValue);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const newData = {};
        params.forEach((value, key) => {
            newData[key] = value;
        });
        setData(newData);
    }, []);

    return [data, setData];
};