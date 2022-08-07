import axios from 'axios';

//TODO - get these from env variables 
const baseURL = 'http://localhost:3000';

const axiosClient = axios.create({
    baseURL: 'http://localhost:3000/api',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
});

export default axiosClient;


