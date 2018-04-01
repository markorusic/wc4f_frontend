<template>
  <header class="main-header" :style="getStyle">
      <nav>
          <span class="logo">
              <router-link :to="homeRouteObject">
                Telekom Srbija
              </router-link>
          </span>
          <ul class="flex-list">
              <li v-for="(link, index) in getLinks" :key="index">
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
import authService from '@/services/auth'
export default {
    data () {
        return {
            isAuthenticated: authService.isAuthenticated(),
            authLinks: [
                {
                    routeName: 'user-profile',
                    displayValue: 'Profil'
                },
                {
                    routeName: 'user-recommendation-packages',
                    displayValue: 'Ponuda'
                },
                // {
                //     routeName: 'user-profile',
                //     displayValue: 'Pomoć'
                // }
            ],
            guestLinks: [
                {
                    routeName: 'home',
                    displayValue: '20 godina'
                },
                {
                    routeName: 'home',
                    displayValue: 'O nama'
                }
            ]
        }
    },
    watch: {
        $route (newVal, oldVal) {
            this.isAuthenticated = authService.isAuthenticated()
        }
    },
    computed: {
        homeRouteObject () {
            return {
                name: 'home'
            }
        },
        getStyle () {
            return {
                // backgroundColor: 'transparent'
            }
        },
        getLinks () {
            if (this.isAuthenticated) {
                return this.authLinks
            }
            return this.guestLinks
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
    background-color: transparent;
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

