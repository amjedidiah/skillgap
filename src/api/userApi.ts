import axios from "axios"


const baseUrl = "http://192.168.242.3:7000"


export const updateUserProfileApi = async (data) => { 
    const response =  await axios.post(`${baseUrl}/api/v1/user/profileUpdate`, data, {
      withCredentials: true
    });
    return response.data
 }




