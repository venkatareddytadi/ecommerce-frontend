
import axios from 'axios';
//const DEPLOYED='http://16.171.87.73:80'
const LOCALHOST='http://localhost:5454'


// export const API_BASE_URL = DEPLOYED

const [apiBaseUrl, setApiBaseUrl] = useState('');

useEffect(() => {
  const fetchNgrokUrl = async () => {
    try {
      const response = await axios.get('https://github.com/venkatareddytadi/ecommerce-frontend/blob/master/backendUrl.json');
      setApiBaseUrl(response.data.url);
    } catch (error) {
      console.error('Error fetching Ngrok URL:', error);
    }
  };

  fetchNgrokUrl();
}, []);


const api = axios.create({
  baseURL: apiBaseUrl,
});

const token = localStorage.getItem('jwt');

api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

api.defaults.headers.post['Content-Type'] = 'application/json';

export default api;
