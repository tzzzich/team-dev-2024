import { useEffect, useState } from "react";
import { api } from "../instance.js";
import { URL_API } from "../../utils/constants/urlApi";

export const useProfile = (defaultValue) => {
    const [profile, setProfile] = useState(defaultValue);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await api.get(URL_API.PROFILE_URL);
                setProfile(response.data);
            } catch (e) {
                setProfile(null);
            }
        }

        fetchProfile();
    }, []);

    return profile;
}