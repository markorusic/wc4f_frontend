<template>
    <div class="hero-container">
        <div class="hero-overlay-bg">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 id="contest-logo"></h1>
                    </div>

                    <div class="col-12 offset-lg-2 col-lg-8">
                        
                        <div class="col-12">
                            
                        </div>
                    </div>
                    
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
              name: '',
              img: ''
          })
      }
  }
}
</script>

<style scoped>
.hero-container {
    background-image: url(./../../assets/profile_cover.png);
}
</style>

