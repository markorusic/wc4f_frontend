<template>
  <header class="main-header" :style="getStyle">
      <nav>
          <span class="logo">
              <router-link :to="homeRouteObject">
                Telekom Srbija
              </router-link>
          </span>
          <ul class="flex-list">
              <li v-for="(link, index) in links" :key="index">
                  <router-link
                    :to="{
                        name: link.routeName
                    }"
                  >{{ link.displayValue }}</router-link>
              </li>
          </ul>
      </nav>
  </header>
</template>

<script>
export default {
    data () {
        return {
            links: [
                {
                    routeName: 'user-profile',
                    displayValue: 'Profil'
                },
                {
                    routeName: 'user-profile',
                    displayValue: 'Ponuda'
                },
                {
                    routeName: 'user-profile',
                    displayValue: 'Pomoć'
                }
            ]
        }
    },
    computed: {
        homeRouteObject () {
            return {
                name: 'home'
            }
        },
        getStyle () {
            if (this.$route.name === 'user-profile') {
                return {
                    backgroundColor: 'transparent'
                }
            }
            return {}
        }
    }
}
</script>

<style scoped>
.main-header {
    margin: 0;
    padding: 0;
    width: 100%;
    box-sizing: border-box;
    height: 75px;
    background-color: #7A7A7A;
}
.main-header nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
}
.main-header nav ul li:not(:last-child) {
    margin-right: 15px;
}
.main-header nav .logo a, .main-header nav ul li a {
    color: white;
    font-size: 24px;
}
</style>

