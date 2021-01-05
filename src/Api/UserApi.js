import axios from "axios";

// const BASEURL = "http://api.waverytime.shop/user/";
// axios.defaults.baseURL = BASEURL;
// axios.defaults.xsrfCookieName = "csrftoken";
// axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";

const registerUser = async (body) => {
  const response = await axios.post("/", body);
  return response;
};

const checkUserProperty = async (params) => {
  const response = await axios.get("", {
    params,
  });
  return response;
};

const loginUser = async (body) => {
  const response = await axios.put(
    "/user/login/",

    body
  );
  console.log(response);
  return response;
};
const logoutUser = async (token) => {
  const config = { headers: { Authorization: `Token ${token}` } };
  const response = await axios.post("/logout/", {}, config);
  return response;
};

const sendEmail = async (token) => {
  const config = { headers: { Authorization: `Token ${token}` } };
  const response = await axios.post("/verify/", {}, config);
  return response;
};

export { registerUser, checkUserProperty, loginUser, logoutUser, sendEmail };
