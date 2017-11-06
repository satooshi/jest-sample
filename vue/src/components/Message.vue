<template>
  <div id="app">
    <p>
      {{ message }}
    </p>

    <span v-bind:title="message">
      Hover your mouse over me for a few seconds
      to see my dynamically bound title!
    </span>
  </div>
</template>

<script>
  export default {
    name: 'Message',
    data() {
      return {
        message: 'Hello cat persons!'
      }
    }
  }
</script>
