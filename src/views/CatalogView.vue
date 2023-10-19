<template>
  <section class="catalog">
    <div class="catalog__wrapper container">
      <div class="catalog__items">
        <product-card v-for="product in getSlicedProducts" :key="product.id" :content="product" />
      </div>
      <button @click="this.LOAD_PRODUCTS()" class="catalog__button">Показать еще</button>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import ProductCard from '../components/blocks/ProductCard.vue';

export default {
  name: 'CatalogView',
  components: {
    ProductCard,
  },
  async created() {
    await this.fetchProducts();
  },
  computed: {
    ...mapGetters(['getAllProducts','getSlicedProducts'])
  },
  methods: {
    ...mapActions(['fetchProducts']),
    ...mapMutations(['LOAD_PRODUCTS']),

  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/utility/vars';

.catalog {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  &__wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  &__button {
    align-self: center;
    padding: 3px 18px;
    border-radius: 4px;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    margin-bottom: 120px;
    @media screen and (min-width:$desktop) {
      align-self: flex-end;
    }
  }

  &__items {
    display: grid;
    grid-template-columns: 280px;
    justify-content: center;
    grid-gap: 4vw;
    
    @media screen and (min-width:$tablet-min) {
      grid-template-columns: 280px 280px;
    }
    @media screen and (min-width:$tablet-max) {
      grid-template-columns: 280px 280px 280px;
      grid-gap: 4vw;
      justify-content: center;
    }
    @media screen and (min-width:$desktop) {
        grid-template-columns: 280px 280px 280px 280px;
        justify-content: space-between;
        row-gap: 30px;
        column-gap: 0;
        width: 100%;

    }
  }
}
</style>