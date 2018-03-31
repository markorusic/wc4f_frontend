<template>
  <b-container class="py-5">    
    <contacts :contacts="contacts" title="Najcesci kontakti"></contacts>
    <resources :resources="resources" title="Resursi koje ste trosili"></resources>
  </b-container>
</template>

<script>

// import { mapGetters } from 'vuex'
// import { http } from '@/services/http'
import Contacts from './Contacts'
import Resources from './Resources'

export default {
  components: {
      Contacts,
      Resources
  },  
  data () {
    return {
      contacts: [
        {
          id: 1,
          name: "John Doe"
        },
        {
          id: 2,
          name: "Dragana Mirkovic"
        },
        {
          id: 3,
          name: "John Doee"
        }
      ],
      resources: [
        {
          id: 1,
          amount: 90,
          unit: 'minute',
          displayValue: 'minuta'
        },
        {
          id: 2,
          amount: 200,
          unit: 'sms',
          displayValue: 'sms'
        },
        {
          id: 3,
          amount: 56,
          unit: 'net',
          displayValue: 'mb'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
