<template>
  <div>
      <login :showModal="showLoginModal" @closeLoginModal="toggleLoginModal"></login>
  </div>
</template>

<script>
import Login from '@/components/shared/Login'
export default {
  components: {
    Login
  },
  data () {
    return {
      showLoginModal: true
    }
  },
  methods: {
    toggleLoginModal () {
      this.showLoginModal = !this.showLoginModal
    }
  }
}
</script>

