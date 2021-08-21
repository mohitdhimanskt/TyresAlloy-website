<template>
  <div>
    <!-- <Header /> -->
    <Nav />
    <div class="uk-section uk-section-default">
      <div class="uk-container uk-container-large"> 
         <nuxt /> 
       </div>
    </div> 
   
    <Ads />
    <Footer />
  </div>
</template>

<script>
// Import your new Header component
import Header from "~/components/Header.vue";
import Nav from "~/components/Nav.vue";
import Footer from "~/components/Footer.vue";
export default {
  components: {
    Header,
    Nav,
    Footer
  }
};
</script>
