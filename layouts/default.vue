<template>
  <div>
   <Nav></Nav> 
  <HeroSlider></HeroSlider>
    <Nuxt></Nuxt>

  <Ads class="mx-auto sm:m-10"></Ads>
    <Footer></Footer> -->

    <!-- <Footer /> -->
  </div>
</template>

<script>
// Import your new Header component
// import Header from "~/components/Header.vue";
import Nav from "~/components/Nav.vue";
import HeroSlider from "~/components/HeroSlider.vue";
import Footer from "~/components/Footer.vue";
import Ads from "../components/Ads.vue";

export default {
  components: {
    Nav,
    HeroSlider,
    Ads,
    Footer,
    
  }
};
</script>
