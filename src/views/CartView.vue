<template>
  <div class="cart">
    <div class="cart__wrapper container">
      <cart-item v-for="product in getCartProducts" :key="product.id" :content="product"/>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import CartItem from '../components/blocks/CartItem.vue'

export default {
  name: 'CartView',
  components: {
    CartItem
  },
  async created() {
    await this.fetchCart();
  },
  computed: {
    ...mapGetters(['getCartProducts'])
  },
  methods: {
    ...mapActions(['fetchCart'])
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/utility/vars';
  .cart {
    display: flex;
    justify-content: center;

    &__wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      gap: 20px;
      padding: 12px;
      @media screen and (min-width:$tablet-max) {
        padding: 0;
        align-items: flex-start;
      }
    }
  }
</style>