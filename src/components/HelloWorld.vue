<template>
  <div class="full-width">
    <div class="info" :value="true">
      Msg from vuex: {{ msg }}
    </div>
    <div :class="serverErr ? 'error' : 'success'" :value="true">
      <w-loader v-if="isLoading"></w-loader>
      <div v-else class="flex-wrap">
        <div v-for="post in posts"
          :key="post.id"
          class="post"
        >
          <h3>{{ post.title | ucFirst }}</h3>
          <p>{{ post.body | ucFirst }}</p>
        </div>
      </div>      
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
      posts: [],
      serverErr: false
    }
  },
  computed: {
    ...mapGetters({
      msg: 'msg'
    })
  },
  created () {
    this.isLoading = true
    http.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        this.posts = res.data
        this.serverErr = false
        this.isLoading = false
      })
      .catch(() => {
        this.serverMsg = 'Doslo je do greske'
        this.serverErr = true
        this.isLoading = false
      })
  }
}
</script>

<style scoped>
.post {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  box-sizing: border-box;
}
</style>
