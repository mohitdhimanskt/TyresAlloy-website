<template>
  <div>
    <h1 data-v-60223acd="" class="font-bold m-5 md:mx-10">
      {{ product.Name }}
    </h1>
    <div
      class="sm:grid grid-cols-2 justify-center shadow-lg items-center gap-3 m-5 md:m-5"
    >
      <div>
        <img class="max-h-screen" :src="getStrapiMedia(product.image.url)" />
      </div>
      <!-- <div>{{ product.Name }}</div> -->
      <div class="sm:m-3 md:m-5 p-3 sm:p-0">
        <p class="my-2">
          <span>Price:$ </span>{{ product.price | formatPrice }}
        </p>
        <span class="my-2">Quantity: </span>
        <!-- <input
          v-model="cartItems.quantity"
          class="p-3 border border-solid border-t-0 border-l-0 border-r-0 border-b-1"
          type="number"
        /> -->
        <p class="my-2 text-sm">{{ product.description }}</p>
        <button
          class="button -green my-2"
          @click="
            addItemToCart(cartItem);
            displayMessage();
          "
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { getStrapiMedia } from "../../utils/medias";
import { mapActions } from "vuex";
export default {
  name: "product",
  props: {
    buttons: {
      type: Array
    }
  },

  async asyncData({ $strapi, params }) {
    const matchingProduct = await $strapi.find("products", {
      slug: params.slug
    });
    return {
      product: matchingProduct[0]
      // global: await $strapi.find("global"),
    };
  },
  // data() {
  //   return {
  //     apiUrl: process.env.strapiBaseUri,
  //      cartItems: {
  //        id: this.product.id,
  //       name: this.product.name,
  //       url: this.product.image.url,
  //       price: this.product.price,
  //       quantity: 1,
  //     },
  //   };
  // },
 
  methods: {
    ...mapActions(["addItemToCart"]),
    displayMessage() {
      this.$swal({
        title: "Cart Updated!",
        text: `${this.product.Name} was added to your cart!`,
        icon: "success",
        button: "Ok"
      });
    },
    moment,
    getStrapiMedia
  },
  filters: {
    formatPrice(price) {
      return `$${price}`;
    }
  }
};
</script>

<style scoped>
.button {
  text-decoration: none;
  background-color: rgb(42, 151, 39);
  color: #ffffff;
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
.h1 {
  font-style: italic;
}
</style>
