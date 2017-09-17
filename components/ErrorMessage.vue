<template>
    <div class="Error">
        <p class="Error-message">Sorry, there is no weather information of {{place}}. Try another city.</p>
    </div>
</template>

<script>
    export default {
        name:'error-message',
        props: ['place'],
    }
</script>

<style scoped>

</style>