<template>
    <div class="w-25">
        register
        <input v-model="name" type="text" placeholder="name" required class="form-control">
        <input v-model="email" type="email" placeholder="email" required class="form-control">
        <input v-model="password" type="password" placeholder="password" required class="form-control">
        <input v-model="password_confirmation" type="password" placeholder="password_confirmation" required class="form-control">
        <input @click.prevent="register()" type="submit" class="btn btn-success" value="register">
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
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
            error: null
        }
    },
    methods: {
        register() {
            axios.get('/sanctum/csrf-cookie')
                .then(response => {
                    axios.post('/register', {
                        name: this.name,
                        email: this.email,
                        password: this.password,
                        password_confirmation: this.password_confirmation,
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