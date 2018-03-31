<template>
  <div id="app">
    <w-header></w-header>
    <main>
      <transition enter-active-class="animated bounceInRight">
        <router-view />
      </transition>
    </main>    
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
