<template>
  <div>
      <h3 class="text-center py-5 font-36">{{ title }}</h3>
        <b-row>
            <b-col v-for="resource in resources" :key="resource.id" class="text-center">
                <div>
                    <vue-circle
                        :progress="getProgress(resource)"
                        :size="200"
                        :reverse="false"
                        line-cap="round"
                        :fill="getFill(resource.unit)"
                        empty-fill="rgba(0, 0, 0, .1)"
                        :animation-start-value="0.0"
                        :start-angle="0"
                        insert-mode="append"
                        :thickness="15"
                        :show-percent="false">
                        <p class="font-76">{{ resource.used }}</p>
                    </vue-circle>
                    <p class="font-48 uc">{{ resource.displayValue }}</p>
                </div>
            </b-col>
        </b-row>
  </div>
</template>

<script>
import VueCircle from 'vue2-circle-progress'

export default {
    components: {
        VueCircle
    },
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
  },
  methods: {
      getProgress (resource) {
          return (resource.used / resource.amount) * 100
      },
      getFill (unit) {
          const fill = {
              color: 'green'
          }
          if (unit === 'minute') {
              fill.color = 'red'
          }
          if (unit === 'sms') {
              fill.color = 'blue'
          }
          return fill
      }
  }
}
</script>

