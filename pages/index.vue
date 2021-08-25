<template>
  <div>
    <!-- <HeroSection /> -->
    <!-- <Nav class="sticky top-0" /> -->
    <div class="sm:w-11/12 md:w-4/5 mx-auto">
      <!-- <h1 class="m-5 font-bold text-lg">All Products</h1> -->
      <Featured class="mx-auto" :products="products" />
    </div>
    <!-- <Ads class="mx-auto sm:m-10"></Ads> -->
    <!-- <NewsLetter class="mx-auto" /> -->
    <!-- <Footer /> -->
  </div>
</template>
<script>
import Featured from '../components/Featured.vue'

export default {
  components: { Featured },
 async asyncData({ $strapi }) {
   try {
   let products = await $strapi.find("products");
    console.log(products)
    return {
     products    };
    }catch (e){
      console.log(e)
    }
 }
  }
</script>

<style scoped>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>