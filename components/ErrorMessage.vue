<template>
    <div class="Error">
        <p class="Error-message">{{message}}</p>
    </div>
</template>

<script>
    export default {
        name:'error-message',
        props: ['message'],
    }
</script>

<style scoped>

</style>