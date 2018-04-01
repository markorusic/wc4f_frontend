<template>
  <div class="full-width">
    <user-hero :user="user"></user-hero>
    <template v-if="loading">
      <w-loader class="flex-center"></w-loader>
    </template>    
    <template v-else>
      <b-container class="my-5">        
        <resources :resources="resources" title="Potrosila si do sad"></resources>
        <div class="flex-center my-5 py-5">
          <graph></graph>
        </div>        
      </b-container>
      <div class="fill-width">
        <offers id="#offers" :offers="offers" title="Dodaj sebi bonus"></offers>
      </div>      
    </template>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import UserHero from './../UserHero'
import Contacts from './../Contacts'
import Graph from './../Graph'
import Resources from './../Resources'
import Offers from './../Offers'
import authServices from '@/services/auth'

export default {
  components: {
      UserHero,
      Contacts,
      Resources,
      Offers,
      Graph
  },
  created () {
    this.$store.dispatch('user/loadContacts')
    this.$store.dispatch('user/loadResources')
    this.$store.dispatch('user/loadOffers')
  },
  computed: {
      ...mapGetters('user', {
          user: 'getUser',
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
