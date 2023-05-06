import { createRouter, createWebHistory } from 'vue-router';


const routes = [
    {
        path: '/users/register',
        name: 'user.register',
        component: () => import('./components/Register.vue'),
    },
    {
        path: '/users/login',
        name: 'user.login',
        component: () => import('./components/Login.vue'),
    },
    {
        path: '/test/get',
        name: 'test.get',
        component: () => import('./components/TestGet.vue'),
    },
    {
        path: '/user/personal',
        name: 'user.personal',
        component: () => import('./components/Personal.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('x_xsrf_token');
    if (! token)
    {
        if (to.name == 'user.login' || to.name == 'user.register')
        {
            return next();
        } else
        {
            return next({name: 'user.login'});
        }
    } else
    {
        if (to.name == 'user.login' || to.name == 'user.register')
        {
            return next({name: 'user.personal'});
        }
    }

    next();
});


export default router;
