<template>
  <svg-sprite />
  <header-component />
  <main>
    <router-view/>
  </main>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import SvgSprite from './components/modules/SvgSprite.vue'

export default {
  components: {
    HeaderComponent,
    SvgSprite
  }
}
</script>

<style lang="scss">  
  @import './assets/styles/utility/reset.scss';
  @import './assets/styles/common.scss';
</style>
