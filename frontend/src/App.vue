<template>
  <div id="app">
    <nav class="navbar navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Kotoba</a>
    </nav>
    <div class="container pt-4">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>
