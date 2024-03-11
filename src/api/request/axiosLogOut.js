import { URL_API } from "../../utils/constants/urlApi"
import { api } from "../instance"

export const axiosLogOut = async() => {
    await api.post(URL_API.LOGOUT_URL)
    localStorage.setItem('token', null)
    console.log(localStorage.getItem('token'))
    window.location.href = '/'
}