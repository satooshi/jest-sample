<template>
  <div id="app">
    {{ message }}
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
