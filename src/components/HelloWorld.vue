<template>
  <div class="full-width">
    <b-alert show dismissible variant="info">
      Msg from vuex: {{ msg }}
    </b-alert>
    <div :class="serverErr ? 'error' : 'success'">
      <w-loader v-if="isLoading"></w-loader>
      <b-container v-else fluid>
        <b-row>
          <div v-for="post in posts"
            :key="post.id"
            class="col-12 col-sm-6 col-lg-4 post"
          >
            <h3>{{ post.title | ucFirst }}</h3>
            <p>{{ post.body | ucFirst }}</p>
          </div>
        </b-row>
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
