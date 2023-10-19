<template>
    <header class="header">
        <div class="header__wrapper container">
            <inline-svg id="main_logo" :width="145" :height="40"/>
            <nav class="header__navigation">
                <router-link to="/" class="header__link">Главная</router-link>
                <router-link to="/cart" class="header__link">Корзина</router-link>
            </nav>
        </div>
    </header>
</template>

<script>
import InlineSvg from './modules/InlineSvg.vue'

export default {
    name: 'HeaderComponent',
    components: {
        InlineSvg,
    },
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/utility/vars';
.header {
    display: flex;
    justify-content: center;
    align-items: center;

    &__wrapper {
        padding: 20px 30px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    &__navigation {
        display: flex;
        gap: 8px;
        @media screen and (min-width:$mobile-max) {
             gap: 24px;
        }
    }

    &__link {
    color: $mainTextColor;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;

        &.router-link-exact-active {
            color: $secondaryTextColor;
        }
    }
}
</style>