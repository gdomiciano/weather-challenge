<template>
    <svg class="icon" :width="width" :height="height" :viewBox="glyph.viewBox">
        <use :xlink:href="`#${glyph.id}`" />
    </svg>
</template>

<script>
    export default {
        name: 'icon',
        props: [
            'glyph',
            'width',
            'height',
        ],
    };
</script>

<style scoped lang="scss">
    .icon {
        background: transparent no-repeat;
        display: inline-block;
    }
</style>