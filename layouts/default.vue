<template>
    <div id="app">
        <fixed-header/>
        <nuxt/>
    </div>
</template>

<style lang="scss">
    @import '~assets/scss/base';
</style>

<script>
    import FixedHeader from '~/components/FixedHeader.vue';
    
    export default {
        components: {
            FixedHeader,
        },
    };
</script>
