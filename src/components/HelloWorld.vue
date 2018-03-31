<template>
  <b-container class="py-5">
    <h2 class="text-center font-36">Najcesci kontakti</h2>
    <b-row class="text-center py-5">
      <b-col v-for="contact in contacts" :key="contact.id" class="flex-center">
        <div class="contact flex-center-col">
          <span class="font-20">{{ contact.name }}</span>
        </div>
      </b-col>
    </b-row>
    <h3 class="text-center py-5 font-36">Resursi koje ste trosili</h3>
    <b-row>
      <b-col v-for="resource in resources" :key="resource.id" class="text-center">
        <div>
          <h2 class="font-115">{{ resource.amount }}</h2>
          <span class="uc font-48">{{ resource.displayValue }}</span>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

// import { mapGetters } from 'vuex'
// import { http } from '@/services/http'

export default {
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
.post-wrapper {
  padding: 20px;
  box-sizing: border-box;
}
.contact {
  height: 100%;
  width: 100%;
  padding: 10px;
  background-color: #7A7A7A;
  color: white;
  box-sizing: border-box;
  max-width: 250px;
}
</style>
