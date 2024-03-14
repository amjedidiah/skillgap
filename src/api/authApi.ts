import axios from "axios";


const baseUrl22 = "http://192.168.251.3:7000";
const baseUrl = "https://skillgap-api-1fc27db9f77b.herokuapp.com";


// http://localhost:7000

// http://localhost:7000/api/v1/user/register

export const registerApi = async (data: any) => {
  const response = await axios.post(`${baseUrl}/api/v1/user/register`, data, {
    withCredentials: true,
  });
  console.log("this is the response", response);
  return response.data;
};

export const validateMagicApi = async (data: any) => {
  console.log("this is the validate", data);
  const response = await axios.post(
    `${baseUrl}/api/v1/user/validate-magicToken`,
    data,
    {
      withCredentials: true,
    }
  );
  console.log("from inner", response.data);
  return response.data;
};

export const loginApi = async (data: any) => {
  const response = await axios.post(`${baseUrl}/api/v1/user/login`, data, {
    withCredentials: true,
  });
  return response.data;
};

export const validateEmail = async (data: any) => {
  const response = await axios.post(
    `${baseUrl}/api/v1/user/validate-email`,
    data,
    { withCredentials: true }
  );
  return response.data;
};

export const doesEmailExist = async (data: any) => {
  const response = await axios.post(
    `${baseUrl}/api/v1/user/does-email-exist`,
    data,
    { withCredentials: true }
  );
  return response.data;
};


export const logOutApi = async (data: any) => {
  const response = await axios.post(`${baseUrl}/api/v1/user/logOut`, data, {
    withCredentials: true,
  });
  return response.data;
};

//  const jwt = await AsyncStorage.getItem("userLoginToken")
