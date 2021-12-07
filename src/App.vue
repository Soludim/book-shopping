<template>
  <div>
    <app-header></app-header>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header";


export default {
  created() {
    this.$store.dispatch("initBooks");
    this.$store.dispatch('checkAuth');
  },
  components: {
    appHeader: Header
  },
};
</script>

<style>
.results {
  font-size: small;
}
body {
  padding: 15px;
  margin: 20px;
}
a {
  cursor: pointer;
}
</style>
