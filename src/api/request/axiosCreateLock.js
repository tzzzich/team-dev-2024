import { URL_API } from "../../utils/constants/urlApi"
import { api } from "../instance"

export const axiosCreateLock = async(event, keiID) => {
    const formData = new FormData(event.target)
    const dateTimeInterval = {}

    formData.forEach((value, key) => {
        dateTimeInterval[key] = value
    })

    const data = {
        dateTimeInterval: dateTimeInterval,
        description: "smt"
    }

    try {
        await api.post(URL_API.KEY_URL + keiID + '/locking', data)
        window.location.href = `/keys/${keiID}`
    } catch {
        return ('Неверные данные')
    }
}