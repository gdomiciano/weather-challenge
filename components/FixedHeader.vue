<template>
    <header class="Header">
        <h1 class="Header-brand"><icon class="Header-icon" :glyph="logo" width="60" height="60"/> Wheather</h1>
    </header>
</template>

<script>
    import Icon from '~/components/icon.vue';
    import logo from '~/assets/icon/logo.svg';

    export default {
        name: 'fixed-header',

        components: {
            Icon,
        },

        data() {
            return {
                logo,
            };
        },
    };
</script>

<style scoped lang="scss">
    @import '~assets/scss/colors';
    @import '~assets/scss/mixins';

    .Header {
        background: color($theme-blue, 900);
        height: 60px;
        padding: 0 10px;
        position: fixed;
        width: 100%;
    }

    .Header-brand {
        color: color($white);
        display: flex;
        line-height: 60px;
        width: 100%;
    }

    .Header-icon {
        margin-right: 10px;
    }

</style>

