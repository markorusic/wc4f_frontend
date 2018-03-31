<template>
    <div>
        <h2 class="text-center font-36">{{ title }}</h2>
        <b-row class="text-center py-5">
            <b-col v-for="contact in contacts" :key="contact.id" class="flex-center">
                <div class="contact flex-center-col">
                    <span class="font-20">{{ contact.name }}</span>
                </div>
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
  props: {
      contacts: {
          type: Array,
          required: true
      },
      title: {
          type: String,
          required: false,
          default: () => ''
      }
  }
}
</script>

<style scoped>
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

