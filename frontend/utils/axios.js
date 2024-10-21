import axios from "axios";

const BASE_URL ="https://sample-ecommerce-ntkp.onrender.com";

const API = axios.create({ baseURL: BASE_URL, withCredentials: true });

export default API;
