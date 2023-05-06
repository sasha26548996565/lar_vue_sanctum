import './bootstrap';
import { createApp } from 'vue';
import router from './router.js';
//import axios from 'axios';
import Index from './components/Index.vue';

const app = createApp(Index);

app.use(router);
//app.config.globalProperties.axios = axios;
app.mount('#app');
