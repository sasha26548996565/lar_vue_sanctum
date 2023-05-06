<template>
    <div class="w-25">
        LOGIN
        <input v-model="email" type="email" placeholder="email" required class="form-control">
        <input v-model="password" type="password" placeholder="password" required class="form-control">
        <input @click.prevent="login()" type="submit" class="btn btn-success" value="login">
        <div class="text-danger" v-if="error">
            {{ error }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: '',
            error: null
        }
    },
    methods: {
        login() {
            axios.get('/sanctum/csrf-cookie')
                .then(response => {
                    axios.post('/login', {
                        email: this.email,
                        password: this.password
                    })
                        .then(response => {
                            localStorage.setItem('x_xsrf_token', response.config.headers['X-XSRF-TOKEN']);
                            this.$router.push({name: 'test.get'});
                        })
                        .catch(error => {
                            this.error = error.response.data.message;
                        });
                });
        }
    }
}
</script>

<style scoped>

</style>