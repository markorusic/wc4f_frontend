<template>
  <div>
      <h3 class="text-center py-5 font-36">{{ title }}</h3>
        <b-row>
            <b-col v-for="resource in resources" :key="resource.id" class="text-center">
                <div>
                    <h2 class="font-115">{{ resource.amount }}</h2>
                    <span class="uc font-48">{{ resource.displayValue }}</span>
                </div>
            </b-col>
        </b-row>
  </div>
</template>

<script>
export default {
  props: {
      resources: {
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

