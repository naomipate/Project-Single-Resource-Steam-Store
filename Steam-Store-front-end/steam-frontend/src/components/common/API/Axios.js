import axios from "axios";

const AxiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? process.env.NODE_ENV.REACT_APP_API_URL_LOCAL
      : "https://project-single-resource-steam-store.onrender.com",
  timeout: 50000,
});

export default AxiosInstance;
