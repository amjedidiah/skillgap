
import axios from "axios";



// 192.168.2.3
const baseUrl22 = "http://192.168.2.3:7000";
const baseUrl = "https://skillgap-api-1fc27db9f77b.herokuapp.com";


export const createContestApi = async (data: any) => {
  const response = await axios.post(`${baseUrl}/api/v1/contest/create-contest`, data, {
    withCredentials: true,
  });
  return response.data;
};



export const getAllUserContest = async(data: any) => {

  const response = await axios.post(`${baseUrl}/api/v1/contest/get-all-user-contest`, data, {
    withCredentials: true,
  });
  return response.data;
}