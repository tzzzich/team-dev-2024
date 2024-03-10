import { useEffect, useState} from "react"

export const usePagination = (defaultValue, current, count) => {
    const [numbers, setNumber] = useState(defaultValue)
    const numPageDisp = 3
    const half = Math.floor(numPageDisp / 2)

    useEffect(() => {
        let to = numPageDisp

        if (current + half > count) {
            to = count
        } else if (current > half) {
            to = current + half
        }

        const minPageDisp = Math.max(to - numPageDisp, 0)
        setNumber(Array.from({length: Math.min(count, numPageDisp)}, (v, i) => i + minPageDisp + 1))
    }, [count, current])

    return numbers
}