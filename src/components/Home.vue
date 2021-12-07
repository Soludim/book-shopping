<template>
  <div>
    <app-search></app-search>
    <br />
     <hr />
    <div class="row">
      <div class="col-lg-7 col-md-7 col-sm-7 col-xs-8">
        <p class="results text-info">Found {{booksCount}} results</p>
        <app-books></app-books>
      </div>
      <div class="col-lg-5 col-md-5 col-sm-5 col-xs-4">
        <app-carts></app-carts>
      </div>
    </div>
  </div>
</template>
<script>
import Books from "./books/Books";
import ShoppingCart from "./shopping_cart/Carts";
import Search from "./shared/Search";

export default {
  computed: {
    booksCount() {
      return this.$store.getters.books.length;
    },
  },
  components: {
    appBooks: Books,
    appCarts: ShoppingCart,
    appSearch: Search
  },
};
</script>