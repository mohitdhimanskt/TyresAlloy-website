<template>
  <div>
    <!-- <HeroSection /> -->
    <HeroSlider></HeroSlider>
    <!-- <Nav class="sticky top-0" /> -->
    <div class="sm:w-11/12 md:w-4/5 mx-auto">
      <!-- <h1 class="m-5 font-bold text-lg">All Products</h1> -->
      <Featured class="mx-auto" :products="featuredProducts"/>
    </div>
    <Ads class="mx-auto sm:m-10"></Ads>
    <!-- <Ads class="mx-auto sm:m-10"></Ads> -->
    <!-- <NewsLetter class="mx-auto" /> -->
    <!-- <Footer /> -->
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import HeroSlider from '../components/HeroSlider.vue'
import Featured from '../components/Featured.vue'
import Ads from '../components/Ads.vue'
export default {
  components: { HeroSlider, Featured, Ads },
//  async asyncData({ $strapi }) {
//    try {
//    let products = await $strapi.find("products");
//     console.log(products)
//     return {
//      products    };
//     }catch (e){
//       console.log(e)
//     }
//  }
  async asyncData({ $strapi, store, error }) {
    try {
      const response = await $strapi.find("products")
      store.commit('setFeaturedProducts', response)
    } catch (e) {
      error(e)
    }
  },
  data() {
    return {
      featuredProds: [],
    }
  },
  computed: {
    ...mapGetters(['featuredProducts']),
  },
  }
</script>

<style scoped>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>