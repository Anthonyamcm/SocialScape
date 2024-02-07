import axios from 'axios';


const api = axios.create({
  baseURL: 'http://localhost:4000/', // Replace with your API base URL
  headers: {
   "Content-Type": "application/json",
    "Accept":" application/json",
    "X-Client-Version":" 2.0.1"
  },
});

// Interceptors for handling request and response globally
api.interceptors.request.use(
  (config) => {
    // You can modify the request config before it is sent
    // For example, add authentication headers if needed
    // config.headers.Authorization = `Bearer ${yourAccessToken}`;
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    // You can modify the response data before it is resolved
    return response;
  },
  (error) => {
    // Handle response error
    return Promise.reject(error);
  }
);

export default api;