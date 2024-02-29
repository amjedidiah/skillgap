import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios"


const baseUrl22 = "http://192.168.57.3:7000"
const baseUrl = "https://skillgap-api-1fc27db9f77b.herokuapp.com"
// 192.168.139.3


// http://localhost:7000

// http://localhost:7000/api/v1/user/register

export const registerApi = async (data) => { 
  console.log("this is the data", data)
    const response =  await axios.post(`${baseUrl}/api/v1/user/register`, data, {
      withCredentials: true
    });
    console.log("this is the response",response);
    return response.data
     
 }


 export const validateMagicApi = async (data) => { 
  console.log("this is the validate", data)
  const response =  await axios.post(`${baseUrl}/api/v1/user/validate-magicToken`, data, {
    withCredentials: true
  });
  console.log("from inner",response.data)
  return response.data
   
}

 export const loginApi = async (data: any) => {
  console.log("login api ran")
   console.log(data)
    const response = await axios.post(`${baseUrl}/api/v1/user/login`, data, {withCredentials: true})
    return response
 }

//  const jwt = await AsyncStorage.getItem("userLoginToken")



