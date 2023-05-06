<template>
    <div>
        test get
    </div>
</template>

<script>
export default {
    name: 'TestGet',
    mounted() {
        this.testGet();
    },
    methods: {
        testGet() {
            axios.get('/api/test')
                .then(response => {
                    console.log(response.data);
                });
        }
    }
}
</script>

<style scoped>

</style>