<template>
  <div class="col-lg-2 col-md-3 col-sm-3 col-xs-7">
    <!-- <div class="input-group mb-3"> -->
      <input type="text" class="form-control" placeholder="search by title..." v-model="filter" v-on:input="searchMtd"/>
      <!-- <span class="input-group-btn">
        <button type="button" class="btn btn-primary" @click="searchMtd">Search</button>
      </span> -->
    <!-- </div> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      filter: "",
    };
  },
  methods: {
    searchMtd() {
      this.$store.dispatch('filter', this.filter);
    },
  },
};
</script>
<style scoped>
</style>