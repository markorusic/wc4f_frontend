<template>
  <b-container class="py-5">
    <w-loader v-if="loading" class="flex-center"></w-loader>
    <template v-else>
      <contacts :contacts="contacts" title="Najcesci kontakti"></contacts>
      <resources :resources="resources" title="Resursi koje ste trosili"></resources>
    </template>
  </b-container>
</template>

<script>

import { mapGetters } from 'vuex'
import Contacts from './../Contacts'
import Resources from './../Resources'

export default {
  components: {
      Contacts,
      Resources
  },
  created () {
    this.$store.dispatch('user/loadContacts')
    this.$store.dispatch('user/loadResources')
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
