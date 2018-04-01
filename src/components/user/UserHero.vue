<template>
    <div class="hero-container">
        <div class="hero-overlay-bg">
            <div class="container">
                <div class="flex-center">
                    <h1 class="white flex-center-col" v-if="user">
                        <img :src="user.image" :alt="user.name" class="user-logo">
                        <p class="user-name">{{ user.name }}</p>
                    </h1>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
      user: {
          type: Object,
          required: false,
          default: () => ({
              name: 'Ivana Spanovic',
              img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Ivana_%C5%A0panovi%C4%87_%282017%29.jpg/220px-Ivana_%C5%A0panovi%C4%87_%282017%29.jpg'
          })
      }
  }
}
</script>

<style scoped>
.user-logo {
    height: 202px;
    width: 202px;
    border-radius: 50%;
}
.hero-overlay-bg, .hero-overlay-bg .container, .hero-overlay-bg .container .flex-center {
    height: 100%;
}
.hero-overlay-bg {
    background-color: rgba(0,0,0,0.2);
}
.hero-container {
    height: 475px;
    margin-top: -75px;
    background-image: url(./../../assets/profile_cover.png);
    background-position: center;
    background-size: cover;
    margin-left: -10px;
    margin-right: -10px;
}
.user-name {
    font-size: 27px;
    margin-top: 27px;
}
</style>

