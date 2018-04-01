<template>
  <div class="hero-container">
      <div class="hero-overlay-bg">
          <div class="container">
              <div class="flex-center">
                  <div class="flex-center-col">
                        <h1 class="white text-center">Tvoj izbor. Tvoj svet.</h1>
                        <p class="white">Prilagodjavamo se vasim potrebama. Vi birate svoj put.</p>
                        <button v-if="!isAuthenticated" class="btn btn-danger" @click="toggleLoginModal">Uloguj se</button>
                  </div>                  
              </div>
          </div>
      </div>
      <login :showModal="showLoginModal" @closeLoginModal="toggleLoginModal"></login>
  </div>
</template>

<script>
import Login from '@/components/shared/Login'
import authService from '@/services/auth'
export default {
  components: {
    Login
  },
  data () {
    return {
      showLoginModal: false
    }
  },
  computed: {
      isAuthenticated () {
          return authService.isAuthenticated()
      }
  },
  methods: {
    toggleLoginModal () {
      this.showLoginModal = !this.showLoginModal
    }
  }
}
</script>

<style scoped>
.hero-overlay-bg, .hero-overlay-bg .container, .hero-overlay-bg .container .flex-center {
    height: 100%;
}
.hero-overlay-bg {
    background-color: rgba(0,0,0,0.2);
}
.hero-container {
    height: 475px;
    margin-top: -75px;
    background-image: url(./../assets/hero_image.jpg);
    background-position: center;
    background-size: cover;
    margin-left: -10px;
    margin-right: -10px;
}
</style>

