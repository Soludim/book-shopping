<template>
  <div class="row">
    <div class="pull-left" style="padding: 10px">
      <img :src="book.coverImage" style="width: 150px; height: 170px" />
    </div>
    <div style="margin-top: 8px">
      <p>
        <span class="property">Title:</span>
        {{book.title}}
      </p>
      <p>
        <span class="property">Author:</span>
        {{book.author}}
      </p>
      <p>
        <span class="property">Quantity:</span>
        {{book.quantity}}
      </p>
      <p>
        <span class="property">Price:</span>
        <span class="badge bage-info">{{book.price | currency}}</span>
      </p>
      <button class="btn btn-success btn-xs" @click="addCart">Add to chart</button>
    </div>
  </div>
</template>
<script>
export default {
  props: ["book"],
  methods: {
    addCart() {
      this.$store.dispatch('addToCart', this.book)
    }
  }
};
</script>
<style scoped>
.property {
  font-weight: bold;
  font-size: medium;
}
</style>