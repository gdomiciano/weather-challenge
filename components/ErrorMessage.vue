<template>
  <div>
    <p class="Error-message">
      {{ message }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'ErrorMessage',
  props: {
    message: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
</style>
