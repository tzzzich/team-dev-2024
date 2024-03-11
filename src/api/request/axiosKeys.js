import { api } from "../instance"

export const axiosKeys = async(event, url) => {
    const formData = new FormData(event.target)
    const data = {}

    formData.forEach((value, key) => {
        data[key] = value
    })

    try {
        await api.post(url, data)
        window.location.reload()
    } catch {
        return ('Неверные данные')
    }
}