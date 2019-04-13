<template>
  <svg
    class="icon"
    :width="width"
    :height="height"
    :viewBox="glyph.viewBox"
  >
    <use :xlink:href="`#${glyph.id}`" />
  </svg>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    glyph: {
      type: String,
      required: true
    },
    width: {
      type: String,
      required: true
    },
    heigh: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
  .icon {
      background: transparent no-repeat;
      display: inline-block;
      vertical-align: middle;
  }
</style>
