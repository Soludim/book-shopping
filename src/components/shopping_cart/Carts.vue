<template>
    <div>
        <h4 style="font-weight:bolder">Shopping Cart</h4>
        <div style="border: 1px solid black"></div>
        <p v-if="carts.length < 1" class="muted">No Items in the cart</p>
        <app-cart v-for="cart in carts" :cart="cart" :key="cart.id"></app-cart>
    </div>
</template>
<script>
import Cart from './Cart';

export default {
    computed: {
        carts() {
            return this.$store.getters.carts;
        }
    },
    components: {
        appCart: Cart
    }
}
</script>
<style scoped>
 .muted {
     font-size: smaller;
 }
</style>