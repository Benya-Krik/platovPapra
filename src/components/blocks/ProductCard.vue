<template>
    <article class="product-card">
        <img class="product-card__image" src="../../assets/images/top.png" :alt="content.title">
        <div class="product-card__info">
            <div class="product-card__top-group">
                <h3 class="product-card__title">{{ content.title }}</h3>
                <p class="product-card__description"> {{ content.description }}</p>
            </div>
            <div class="product-card__bottom-group">
                <p class="product-card__price">{{ content.price }} ₽</p>
                <inline-svg :class="{active: productInCart}" @click="addToCart()" id="cart" :width="17" :height="20" class="product-card__button"/>
            </div>
        </div>
    </article>
  </template>
  
  <script>
  import { mapMutations, mapGetters } from 'vuex'
  import InlineSvg from '../modules/InlineSvg.vue'
  
  export default {
    name: 'ProductCard',
    components: {
        InlineSvg,
    },
    props: {
        content: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            productInCart: false
        }
    },
    created() {
        this.checkCart();
    },
    computed: {
        ...mapGetters(['getCartProducts'])
    },
    methods: {
        ...mapMutations(['ADD_PRODUCT']),
        checkCart() {
            for ( let i=0; i < this.getCartProducts.length; i++ ) {
                if (this.getCartProducts[i].id === this.content.id) {
                    this.productInCart = true;
                    return false;
                }
            }
        },
        addToCart() {
            this.ADD_PRODUCT(this.content)
            this.productInCart = true;
        },
    },
  }
  </script>
  
  <style lang="scss" scoped>
  @import '../../assets/styles/utility/vars';

    .product-card {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        max-width: 280px;
        border-radius: 10px;
        overflow: hidden;
        -webkit-box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.2);
        -moz-box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.2);
        box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.2);
        transition: .3s;

        &:hover {
            transform: scale(1.03);
        }

        &__info {
            display: flex;
            flex-direction: column;
            padding: 20px;
            gap: 66px;
        }

        &__top-group {
            display: flex;
            flex-direction: column;
        }

        &__title {
            font-size: 24px;
            font-style: normal;
            font-weight: 400;
            color: $mainTextColor;
        }

        &__image {
            width: 100%;
            height: 100%;
        }

        &__description {
            overflow: hidden;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            color: $mainTextColor;
            opacity: .5;
            height: 100%;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
        }

        &__bottom-group {
            display: flex;
            box-sizing: border-box;
            width: 100%;
            justify-content: space-between;
            align-items: center;
        }

        &__price {
            color: $mainTextColor;
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
        }

        &__button {
            transition: .3s;
            &:hover {
                cursor: pointer;
                opacity: .8;
            }
            &.active {
                opacity: .5;
                pointer-events: none;
            }
        }
    }
  </style>