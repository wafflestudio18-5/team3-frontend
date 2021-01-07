import axios from "axios";

export default axios.create({
  baseURL: "http://api.waverytime.shop/",
  params: {},
});
