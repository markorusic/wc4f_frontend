<template>
  <div class="full-width pt-5">
    <template v-if="loading">
      <w-loader class="flex-center"></w-loader>
    </template>    
    <template v-else>
      <b-container class="mb-5">
        <contacts :contacts="contacts" title="Najcesci kontakti"></contacts>
        <resources :resources="resources" title="Resursi koje ste trosili"></resources>
      </b-container>
      <div class="fill-width">
        <offers :offers="offers" title="Dodaj sebi bonus"></offers>
      </div>      
    </template>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import Contacts from './../Contacts'
import Resources from './../Resources'
import Offers from './../Offers'

export default {
  components: {
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
