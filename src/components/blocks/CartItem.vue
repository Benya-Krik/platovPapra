<template>
    <div class="cart-item">
        <inline-svg class="cart-item__close" id="close" :width="15" :height="15" @click="removeFromCart()"/>
        <div class="cart-item__image">
            <img src="../../assets/images/top.png" :alt="content.title">
        </div>
        <div class="cart-item__info">
            <p class="cart-item__title">{{ content.title }}</p>
            <p class="cart-item__description"> {{ content.description }}</p>
            <p class="cart-item__price">{{ content.price }} ₽</p>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
import InlineSvg from '../modules/InlineSvg.vue'

export default {
  name: 'CartItem',
  components: {
    InlineSvg,
  },
  props: {
    content: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapMutations(['REMOVE_PRODUCT']),
    removeFromCart() {
      this.REMOVE_PRODUCT(this.content)
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/utility/vars';

  .cart-item {
      display: flex;
      box-sizing: border-box;
      max-width: 500px;
      position: relative;
      transition: .3s;  
      overflow: hidden;

      &:hover {
        transform: scale(1.03);
      }  
      &__close {
        position: absolute;
        top: 1px;
        right: 1px;
        transition: .3s;
        &:hover {
            opacity: .5;
            cursor: pointer;
        }
      }

      &__info {
        max-width: 300px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex-shrink: 2;
      }

      &__image {
          max-width: 160px;
          max-height: 160px;
          flex-shrink: 0;
          @media screen and (min-width:$mobile-max) {
            max-width: 200px;
            max-height: 200px;
          }
          & img {
            width: 100%;
            height: 100%;
          }
      }
      &__title {
        color: $mainTextColor;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
      &__description {
        color: $mainTextColor;
        font-family: Roboto;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        opacity: .5;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        @media screen and (min-width:$mobile-max) {
            -webkit-line-clamp: 6;
        }
        @media screen and (min-width:$mobile-min) {
          -webkit-line-clamp: 4;
        }
      }
      &__price {
        color: $mainTextColor;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
      }
      &__bottom {
          display: flex;
          justify-content: space-between;
      }
  }
</style>