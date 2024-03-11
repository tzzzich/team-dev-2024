import { URL_API } from "../../utils/constants/urlApi"
import { api } from "../instance"

export const axiosVerified = async(verify, userId) => {
    await api.post(URL_API.VERIFY_USER + '?userID=' + userId + '&unverifyUser=' + verify)
}