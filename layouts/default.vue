<template>
  <div>
   <Nav  :pages="pages"></Nav> 
  <HeroSlider></HeroSlider>
    <Nuxt></Nuxt>

  <Ads class="mx-auto sm:m-10"></Ads>
    <Footer></Footer> -->

    <!-- <Footer /> -->
  </div>
</template>

<script>
export default {
  async fetch() {
    this.pages = await this.$strapi.find("pages");
  },
  data: function () {
    return {
      pages: [],
    };
  },
};
</script>
