<template>
  <div>
    <div class="row">
      <app-search></app-search>
      <div class="pull-right">
        <button class="btn btn-primary" @click="createBook">CREATE NEW BOOK</button>
      </div>
    </div>
    <hr />
    <app-books></app-books>
  </div>
</template>
<script>
import Books from "./admin/books/Books";
import Search from "./shared/Search";

export default {
  components: {
    appBooks: Books,
    appSearch: Search,
  },
  methods: {
    createBook() {
      this.$router.push("/admin-create");
    },
  },
};
</script>