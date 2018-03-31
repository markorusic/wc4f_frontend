<template>
  <div class="full-width">
    <b-alert show dismissible variant="info">
      Msg from vuex: {{ msg }}
    </b-alert>
    <div :class="serverErr ? 'error' : 'success'">
      <w-loader v-if="isLoading"></w-loader>
      <b-container v-else fluid>
        <b-alert v-if="serverErr" show variant="danger">Greska</b-alert>
        <iframe v-else
          width="560"
          height="315"
          :src="ytSrc"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen></iframe>
      </b-container>
    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import { http } from '@/services/http'

export default {
  name: 'HelloWorld',
  data () {
    return {
      isLoading: false,
      ytID: null,
      serverErr: false
    }
  },
  computed: {
    ...mapGetters({
      msg: 'msg'
    }),
    ytSrc () {
      if (this.ytID) {
        return `https://www.youtube.com/embed/${this.ytID}`
      }
      return ''
    }
  },
  created () {
    this.isLoading = true
    http.get('test')
      .then(res => {
        this.ytID = res.data
        this.serverErr = false
        this.isLoading = false
      })
      .catch(() => {
        this.serverErr = true
        this.isLoading = false
      })
  }
}
</script>

<style scoped>
.post-wrapper {
  padding: 20px;
  box-sizing: border-box;
}
.post {
  height: 100%;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  box-sizing: border-box;
}
</style>
