import axios from 'axios';

let API_BASE_URL = 'http://localhost:5454'; // Default URL

export const fetchApiBaseUrl = async () => {
  try {
    const response = await axios.get('https://github.com/venkatareddytadi/ecommerce-frontend/blob/master/backendUrl.json');
    API_BASE_URL = response.data.url;
  } catch (error) {
    console.error('Error fetching Ngrok URL:', error);
  }
};

const initializeApiBaseUrl = async () => {
  await fetchApiBaseUrl();
};

initializeApiBaseUrl();

const api = axios.create({
  baseURL: API_BASE_URL,
});

const token = localStorage.getItem('jwt');

api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
api.defaults.headers.post['Content-Type'] = 'application/json';

export { API_BASE_URL };
export default api;
