<template>
  <div id="app">
    <w-header></w-header>
    <transition enter-active-class="animated bounceInRight">
      <router-view />
    </transition>
    <w-footer></w-footer>
  </div>
</template>

<script>
import wHeader from '@/components/shared/wHeader'
import wFooter from '@/components/shared/wFooter'
export default {
  name: 'App',
  components: {
    wHeader,
    wFooter
  }
}
</script>
