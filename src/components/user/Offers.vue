<template>  
  <div class="offers flex-center-col mt-5 py-5">
        <h2 class="text-center font-36">{{ title }}</h2>
        <b-container fuild>
            <b-row class="text-center py-5">
                <b-col v-for="offer in offers" 
                    :key="offer.id"                    
                    class="col-4 flex-center"
                >
                    <div class="flex-sp-around-col offer-item p-5"
                        :class="{'featured': offer.isFeatured}"
                    >
                        <span class="font-20">{{ offer.name }}</span>
                        <template v-if="offer.isFeatured">
                            <b-button class="offer-btn uc" variant="success">Kupi</b-button>
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
  }
}
</script>

<style scoped>
.offers {
    background-color: #7A7A7A;
    width: 100%;
    color: white;
}
.offer-item {
    background-color: #B7B7B7;
    width: 100%;
    box-sizing: border-box;
    height: 430px;
}
.offer-item.featured {
    height: 458px;
}
.offer-btn {
    background-color: #333;
    color: white;
    border-radius: 0px;
    border: none;
    padding: 10px 25px;
}
</style>

