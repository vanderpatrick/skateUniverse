import axios from "axios";

axios.defaults.baseURL = "skt-drf.herokuapp.com";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;