import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL || '';

const token = localStorage.getItem('tubemate_token') || null;

const Axios = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${token}`,
    Accept: 'application/json'
  }
});

Axios.interceptors.response.use(
  (response) => {
    if(response.data.redirect_url &&  response.request.responseURL.split('/').pop() !== 'profile'){
      window.location.href = response.data.redirect_url;
    }
    return response
  },
  (error) => {
    if (error.response.status === 401) {
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default Axios;