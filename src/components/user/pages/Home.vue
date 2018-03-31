<template>
  <div class="full-width pt-5">
    <w-loader v-if="loading" class="flex-center"></w-loader>
    <template v-else>
      <b-container class="mb-5">
        <contacts :contacts="contacts" title="Najcesci kontakti"></contacts>
        <resources :resources="resources" title="Resursi koje ste trosili"></resources>
      </b-container>
      <div class="fill-width">
        <offers :offers="[
          {
            id: 1,
            name: 'Ponuda 1'
          },
          {
            id: 2,
            name: 'Ponuda 2'
          },
          {
            id: 3,
            name: 'Ponuda 3'
          }
        ]" title="Sta mi nudimo?"></offers>
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
    // this.$store.dispatch('user/loadOffers')
  },
  computed: {
      ...mapGetters('user', {
          contacts: 'getContacts',
          resources: 'getResources',
          contactsLoading: 'getContactsLoading',
          resourcesLoading: 'getResourcesLoading'
      }),
      loading () {
        return this.contactsLoading || this.resourcesLoading        
      }
  }
}
</script>

<style scoped>

</style>
