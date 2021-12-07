<template>
  <div class="round">
    <app-book v-for="book in books" :book="book" :key="book.id"></app-book>
  </div>
</template>
<script>
import Book from "./Book";


export default {
  computed: {
    books() {
        return this.$store.getters.books;
    }
  },
  components: {
    appBook: Book,
  },
};
</script>
<style scoped>
   .round {
       border: 1px solid #e9e9e9;
       padding: 20px
   }
</style>