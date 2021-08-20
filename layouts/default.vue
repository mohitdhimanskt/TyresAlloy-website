<template>
  <div>
    <Header />
    <Nav />
    <div class="uk-section uk-section-default">
      <div class="uk-container uk-container-large">
        <nuxt />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
// Import your new Header component
import Header from "~/components/Header.vue";
export default {
  components: {
    Header
  }
};
</script>
