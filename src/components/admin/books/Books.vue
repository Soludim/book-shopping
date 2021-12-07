<template>
  <div class="row">
    <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1">
      <table class="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Author</th>
            <th>Price</th>
            <th>Quantity</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <app-book v-for="(book, index) in books" :book="book" :index="index" :key="book.id"></app-book>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import Book from "./Book";

export default {
  computed: {
    books() {
      return this.$store.getters.books;
    },
  },
  components: {
    appBook: Book,
  },
};
</script>