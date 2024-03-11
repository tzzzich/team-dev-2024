import { URL_API } from "../../utils/constants/urlApi"
import { api } from "../instance"

export const axiosDeleteKeys = async(keiID) => {
    await api.delete(URL_API.KEY_URL + keiID)
}