<template>
  <div class="full-width">
    <user-hero></user-hero>
    <template v-if="loading">
      <w-loader class="flex-center"></w-loader>
    </template>    
    <template v-else>
      <b-container class="my-5">
        <!-- <contacts :contacts="contacts" title="Najcesci kontakti"></contacts> -->
        <resources :resources="resources" title="Potrosila si do sad"></resources>
      </b-container>
      <div class="fill-width">
        <offers :offers="offers" title="Dodaj sebi bonus"></offers>
      </div>      
    </template>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import UserHero from './../UserHero'
import Contacts from './../Contacts'
import Resources from './../Resources'
import Offers from './../Offers'

export default {
  components: {
      UserHero,
      Contacts,
      Resources,
      Offers
  },
  created () {
    this.$store.dispatch('user/loadContacts')
    this.$store.dispatch('user/loadResources')
    this.$store.dispatch('user/loadOffers')
  },
  computed: {
      ...mapGetters('user', {
          contacts: 'getContacts',
          resources: 'getResources',
          offers: 'getOffers',
          contactsLoading: 'getContactsLoading',
          resourcesLoading: 'getResourcesLoading',
          offersLoading: 'getOffersLoading'
      }),
      loading () {
        return this.contactsLoading || this.resourcesLoading || this.offersLoading
      }
  }
}
</script>

<style scoped>

</style>
