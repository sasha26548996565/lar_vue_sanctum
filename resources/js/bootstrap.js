import 'bootstrap';
import axios from 'axios';
import router from './router';


window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.withCredentials = true;
window.axios.interceptors.response.use({}, error => {
    const token = localStorage.getItem('x_xsrf_token');

    if (token)
    {
        localStorage.removeItem('x_xsrf_token');
    }

    if (error.response.status == 401 || error.response.status == 419)
    {
        router.push({name: 'user.login'});
    }
});