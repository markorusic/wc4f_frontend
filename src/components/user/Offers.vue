<template>
  <div class="offers flex-center-col mt-5 py-5">
        <h2 class="text-center font-36">{{ title }}</h2>
        <b-row class="text-center py-5">
            <b-col v-for="offer in offers" :key="offer.id" class="flex-center">
                <div class="flex-center-col offer-item p-5">
                    <span class="font-20">{{ offer.name }}</span>
                </div>
            </b-col>
        </b-row>
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
    min-height: 150px;
    box-sizing: border-box;
    /* padding: 20px; */
}
.offer-btn {
    background-color: #333;
    color: white;
    border-radius: 0px;
}
</style>

