// http://localhost:7000/api/v1/contest/create-contest
import axios from "axios";




const baseUrl22 = "http://192.168.253.3:7000";
const baseUrl = "https://skillgap-api-1fc27db9f77b.herokuapp.com";
// 192.168.139.3

// http://localhost:7000

// http://localhost:7000/api/v1/user/register

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