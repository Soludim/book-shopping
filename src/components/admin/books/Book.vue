<template>
  <tr>
    <td>{{index + 1}}</td>
    <td>{{book.title}}</td>
    <td>{{book.author}}</td>
    <td>{{book.price}}</td>
    <td>{{book.quantity}}</td>
    <td>
      <button class="btn btn-success btn-xs" @click="editBook">Edit</button>
      <button class="btn btn-danger btn-xs" @click="deleteBook">Dele</button>
    </td>
  </tr>
</template>
<script>
export default {
  props: ["book", "index"],
  methods: {
    deleteBook() {
      this.$store.dispatch('deleteBook', this.book);
        this.$http.put('https://solu-bookshop.firebaseio.com/data/books.json', this.$store.getters.books);
    },
    editBook() {
       this.$router.push({name: 'create', params: {book: this.book}});
    }
  }
};
</script>