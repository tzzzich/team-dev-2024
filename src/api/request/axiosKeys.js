import { api } from "../instance"

export const axiosKeys = async(event, url) => {
    const formData = new FormData(event.target)
    const data = {}

    formData.forEach((value, key) => {
        data[key] = value
    })

    await api.post(url, data)
    window.location.reload()
}