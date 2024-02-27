import axios from "axios"


const baseUrl = "http://192.168.147.3:7000"
// 192.168.139.3
// 192.168.147.3
//  http://localhost:7000/

//  IPv4 Address. . . . . . . . . . . : 192.168.147.3
// Subnet Mask . . . . . . . . . . . : 255.255.255.0
// Default Gateway . . . . . . . . . : 192.168.147.122

export const updateUserProfileApi = async (data) => { 
    const response =  await axios.post(`${baseUrl}/api/v1/user/profileUpdate`, data, {
      withCredentials: true
    });
    return response.data
 }




