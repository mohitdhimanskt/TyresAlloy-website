<template>
  <div>
   <Nav></Nav> 

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
import Footer from "~/components/Footer.vue";
import Ads from "../components/Ads.vue";
export default {
  components: {
    Nav,
    Ads,
    Footer
  }
};
</script>
