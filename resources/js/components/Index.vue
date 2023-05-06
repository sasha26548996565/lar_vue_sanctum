<template>
    <div class="container">
        <router-link :to="{name: 'test.get'}">test get</router-link> <br>
        <template v-if="token">
            <router-link :to="{name: 'user.personal'}">personal</router-link> <br>
            <a @click.prevent="logout()" href="#">logout</a>
        </template>
        <template v-else>
            <router-link :to="{name: 'user.register'}">register</router-link> <br>
            <router-link :to="{name: 'user.login'}">login</router-link> <br>
        </template>
        <router-view :key="$route.fullPath"></router-view>
    </div>
</template>

<script>
export default {
    name: 'Index',
    data() {
        return {
            token: null
        }
    },
    mounted() {
        this.getToken();
    },
    updated() {
        this.getToken();
    },
    methods: {
        getToken() {
            this.token = localStorage.getItem('x_xsrf_token');
        },
        logout() {
            axios.post('/logout')
                .then(response => {
                    localStorage.removeItem('x_xsrf_token');
                    this.$router.push({name: 'user.login'});
                })
        },
    }
}
</script>
