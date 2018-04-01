<template>
  <div class="full-width">
      <user-hero :user="user"></user-hero>
      <offers :offers="[
        {
          id: 1,
          name: 'Surfuj',
          desc: '200 minuta <br> 500 poruka <br> 900mb',
          isFeatured: false,
          isBought: false
        },
        {
          id: 2,
          name: 'Pričaj',
          desc: '1100 minuta <br> 100 poruka <br> 100mb',
          isFeatured: true,
          isBought: false
        },
        {
          id: 3,
          name: 'Šalji poruke',
          desc: '250 minuta <br> 1000 poruka <br> 100mb',
          isFeatured: false,
          isBought: false
        }
    ]" title="Nudimo Vam"></offers>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UserHero from './UserHero'
import Offers from './Offers'
export default {
  components: {
    UserHero,
    Offers
  },
  created () {
      this.$store.dispatch('user/loadResources')
  },
  computed: {
    ...mapGetters('user', {
        user: 'getUser'
    })
  }
}
</script>

