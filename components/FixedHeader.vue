<template>
    <header class="Header">
        <h1 class="Header-brand">Wheather</h1>
    </header>
</template>

<style scoped lang="scss">
    @import '~assets/scss/colors';

    .Header {
        background: color($light-blue, 900);
        height: 50px;
        padding: 10px;
        position: fixed;
        text-align: center;
        width: 100%;
    }

    .Header-brand {
        color: color($white);
    }
</style>
<script>
    export default {
        name: 'fixed-header',
    }
</script>

