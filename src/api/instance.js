import axios from "axios";
import { URL_API } from "../utils/constants/urlApi";

export const api = axios.create({
    baseURL: URL_API.BASE_URL,
    headers: {
        'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiN2Q3MzZhYTUtNzhiNi00MDlmLTljMjMtY2RkM2EyMjg2NzE3IiwibmJmIjoxNzEwMTAxNzQ5LCJleHAiOjE3MTAxMDUzNDksImlzcyI6IktleU1hbmFnZXJCYWNrZW5kRGV2ZWxvcCIsImF1ZCI6IktleU1hbmFnZXJGcm9udGVkIn0.QR_FZhsAWXd-ppXHMZn5GA94HPnV42uvxkMAYfZiAYc`
    }
});