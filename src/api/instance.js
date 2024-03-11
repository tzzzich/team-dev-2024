import axios from "axios";
import { URL_API } from "../utils/constants/urlApi";

export const api = axios.create({
    baseURL: URL_API.BASE_URL,
    headers: {
        'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiN2Q3MzZhYTUtNzhiNi00MDlmLTljMjMtY2RkM2EyMjg2NzE3IiwibmJmIjoxNzEwMTE4MjIwLCJleHAiOjE3MTAxMjE4MjAsImlzcyI6IktleU1hbmFnZXJCYWNrZW5kRGV2ZWxvcCIsImF1ZCI6IktleU1hbmFnZXJGcm9udGVkIn0.5c9C458Wd_hqVbhqar2BliwTs7jgTXRqRMg12ZQv2lE`
    }
});