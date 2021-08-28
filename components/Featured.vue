<template>
  <div>
    <div class="featured">
      <div class="bdr-thin"></div>
      <div>
      <span>HOT   SELLING  WHEELS</span>
    </div>
    </div>
    <div
      class="sm:grid sm:grid-cols-3 md:grid-cols-3 gap-6 justify-center items-center"
    >
      <div
        v-for="product in products"
        :key="product.id"
        class="flex flex-col max-h-screen shadow-xl m-8 sm:m-2 md:m-4 justify-center items-center"
      >
        <div class="img-wrapper h-3/4 mx-auto max-h-screen">
          <img
            class="flex-shrink h-1/2"
           :src="getStrapiMedia(product.image.url)" height="100" 
            alt=""
          />
        </div>
        <div>
          <p class="text-center m-3">
            {{ product.Name }}
          </p>
          <!-- <NuxtLink 
           :to="{ name: 'product-slug', params: { slug: product.slug } }"
        class="link"
          > -->
            <NuxtLink :to="`/products/${product.id}`">
            <button class="button--green mb-4">View Product</button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getStrapiMedia } from "../utils/medias";
export default {
   middleware: "auth",
  name: "Featured",
  
  props: {
    products: {
      type: Array
    }
  },
  
  methods: {
    getStrapiMedia
  } 
};
</script>
<style scoped>
.featured {
   margin-top: -48px;
    font-size: 40px;
    font-style: italic;
    text-align: center;
    margin-bottom: 88px;
}
.bdr-thin {
       border-top: 4px solid #eb1f27;
    width: 80px;
    margin-bottom: -11px;
    margin-left: 380px;
}
</style>
