<template>  
  <div class="offers flex-center-col mt-5 py-5">
        <h2 class="text-center font-36 black">{{ title }}</h2>
        <b-container fuild>
            <b-row class="text-center py-5">
                <b-col v-for="(offer, index) in offers" 
                    :key="offer.id"                    
                    class="col-4 flex-center"
                    :style="getStyle(index)"
                >
                    <div class="flex-sp-around-col offer-item p-5"
                        :class="{'featured': offer.isFeatured}"
                        @click.prevent="setFeatured(offer.id)"
                    >
                        <span class="font-20">{{ offer.name }}</span>
                        <p>{{ offer.desc }}</p>
                        <b-button class="offer-btn uc">Kupi</b-button>
                        <template v-if="offer.isFeatured">
                            <b-button class="preporuka-btn offer-btn uc">Preporuka</b-button>
                        </template>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
  props: {
    offers: {
        type: Array,
        required: true
    },
    title: {
        type: String,
        required: false,
        default: () => ''
    }
  },
  data () {
      return {
          mutableOffers: []
      }
  },
  created () {
      this.mutableOffers = [...this.offers]
  },
  methods: {
      getStyle (index) {
          if (index === 0) {
              return {
                  marginRight: '-40px'
              }
          }
          if (index === 2) {
              return {
                  marginLeft: '-40px'
              }
          }
          return {}
      },
      setFeatured (offerID) {
          this.mutableOffers = this.offers
            .map(offer => {
                offer.isFeatured = false
                if (offer.id == offerID) {
                    offer.isFeatured = true
                }
                return offer
            })
      }
  }
}
</script>

<style scoped>
.offers {
    background-color: #E6E6E6;
    width: 100%;
    color: white;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}
.offer-item {
    background-color: #B8B8B8;
    width: 100%;
    box-sizing: border-box;
    height: 430px;
    border-radius: 20px;
}
.offer-item:hover {
    box-shadow: 4px 4px 5px #666;
    cursor: pointer;
}
.offer-item.featured {
    background: url('./../../assets/offer_card.png') no-repeat center center; 
    height: 458px;
    z-index: 9;
    position: relative;
    box-shadow: 4px 4px 5px #888888;
}
.preporuka-btn {
    position: absolute;
    top: 20px;
    right: 20px;
    padding: 10px 20px !important;
    border-radius: 25px !important;
}
.offer-btn {
    background-color: white;
    color: black;
    border-radius: 0px;
    border: none;
    padding: 10px 45px;
    border-radius: 10px;
}
.offer-btn:hover {
    box-shadow: 4px 4px 5px #666;
}
</style>

