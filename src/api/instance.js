import axios from "axios";
import { URL_API } from "../utils/constants/urlApi";

export const api = axios.create({
    baseURL: URL_API.BASE_URL,
    headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`
    }
});