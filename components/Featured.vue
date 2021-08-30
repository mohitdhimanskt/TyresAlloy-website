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
        v-for="(product, i) in products"
        :key="i"
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
          <NuxtLink 
           :to="{ name: 'product-slug', params: { slug: product.slug } }"
        class="link"
          >
            <!-- <NuxtLink :to="`/Products/${product.id}`"> -->
            <button class="button  mb-4">View Product</button>
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
  
  props: ['products'],

  
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
.button {
    text-decoration: none;
    background-color: rgb(42, 151, 39);
    color: #FFFFFF;
    padding: 10px 30px;
    margin: 5px;
    font-size: 15px;
    font-family: Arial;  
    border-radius: 25px;
    transition: 0.5s;  
  }
  
  .button:hover {
    transition: 0.3s;
    color: black;
    font-weight: bold;
    background-color: rgba(92, 180, 89, 0.884);
    padding: 12px 45px;
  }
</style>
