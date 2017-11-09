<template>
  <div id="app">
    <header>
      <h1>
        Vue ToDo
      </h1>
    </header>

    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col-6">
          <router-view/>
        </div>
      </div>
    </div>

    <footer>
      Copyright <a href="https://github.com/satooshi/jest-sample" target="_blank">@satooshi</a>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
