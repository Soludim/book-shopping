<template>
  <div class="cart">
    <p>{{cart.title}}</p>
    <div>
      ${{cart.price}} * {{cart.quantity}}
      <button
        @click="increaseQuan"
        class="btn btn-danger btn-xs"
      >+</button>
      <button @click="decreaseQuan" class="btn btn-danger btn-xs">-</button>
    </div>
    <p>
      Total:
      <span class="badge badge-success"> {{cart.price * cart.quantity | currency}}</span>
    </p>
  </div>
</template>
<script>
export default {
  props: ["cart"],
  methods: {
    increaseQuan() {
      this.$store.dispatch('increaseQuan', this.cart.id);
    },
    decreaseQuan() {
      this.$store.dispatch('decreaseQuan', this.cart.id);
    },
  },
};
</script>
<style scoped>
.cart {
  border: 1px solid #e9e9e9;
  padding: 4px;
}
</style>