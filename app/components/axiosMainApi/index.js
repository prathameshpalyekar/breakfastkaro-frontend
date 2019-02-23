import axios from 'axios';
import Config from '../../config.js';

const axiosMainApi = axios.create({
    baseURL: Config.BASE_URL,
    responseType: 'json'
});

export default axiosMainApi;