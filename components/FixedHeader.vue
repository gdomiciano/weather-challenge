<template>
    <header class="Header">
        <h1 class="Header-brand"><icon class="Header-icon" :glyph="logo" width="50" height="50" /> Wheather</h1>
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
        text-align: center;
    }

    .Header-brand {
        color: color($white);
        line-height: 60px;
    }

    .Header-icon {
        margin-right: 5px;
    }

</style>

