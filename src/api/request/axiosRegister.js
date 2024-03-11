
import { URL_API } from "../../utils/constants/urlApi";
import { api } from "../instance"

export const axiosRegister = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log(formData);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    data['role'] = 'Dean';

    console.log(data);
  
    try {
      const token = await api.post(URL_API.REGISTER_URL, data);
      localStorage.setItem("token", token.data.token);
      console.log(token.data.token);
      window.location.href = "/";
    } catch (error) {
        console.error("Error during registration:", error);
        return (`Registration failed: ${error.response.data.Message}`);
      }
  };