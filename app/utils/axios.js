import axios from 'axios';
import Cookies from 'universal-cookie';

// Create an Axios instance without the token (general requests)
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,  // Base URL from .env file
  headers: {
    'Content-Type': 'application/json',  // Default headers
  },
});

// Create an Axios instance with the Authorization token in the headers
const axiosInstanceWithToken = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,  // Base URL from .env file
  headers: {
    'Content-Type': 'application/json',  // Default headers
  },
});

// Initialize Cookies
const cookies = new Cookies();

// Add request interceptor for the axiosInstanceWithToken to attach the token
axiosInstanceWithToken.interceptors.request.use(
  (config) => {
    const token = cookies.get('authToken');  // Get the token from cookies (instead of localStorage)
    
    // If token exists, add it to the Authorization header
    if (token) {
      config.headers['Authorization'] = `${token}`;
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Export both Axios instances
export { axiosInstance, axiosInstanceWithToken };
