<template>
  <div>
    <Nav class="sticky top-0" />
    <div class="w-4/5 sm:w-1/2 mx-auto">
      <h1 class="m-5 font-bold text-lg">Your Cart</h1>
    </div>
    <div
      v-for="item in getCart"
      :key="item.id"
      class="w-4/5 sm:w-1/2 flex items-center space-x-3 mx-auto shadow-lg m-5 p-3"
    >
      <div>
        <img class="h-24" :src="getStrapiMedia(item.image.url)" alt="" />
      </div>
      <div>
        <p>
          {{ item.Name }}
        </p>
        <p>
          {{ item.quantity | formatQuantity }}
        </p>
        <button class="button--delete" @click="removeFromCart">
          Delete
        </button>
      </div>
    </div>
    <div class="w-4/5 sm:w-1/2 mb-2 mx-auto">
      <p>
        <span>Total: </span>
        {{ formatCartTotal(getCartTotal) | formatPrice }}
      </p>
      <button
        v-show="getCartTotal > 0"
        class="button--green mx-auto"
        @click="handleSubmit"
      >
        checkout
      </button>
    </div>
    <Ads class="mx-auto sm:m-10" />
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import { getStrapiMedia } from "../utils/medias";
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    id() {
      return this.$route.params.id
    },
    ...mapGetters(["getCart", "getCartTotal"])
  },
  mounted() {
    this.displayMessage();
  },
  filters: {
    formatPrice(price) {
      return `$${price}`;
    },
    formatQuantity(num) {
      const qtyNum = num === 1 ? `${num} unit` : `${num} units`;
      return qtyNum;
    }
  },
  methods: {
    getStrapiMedia,
    deleteCartItem() {
      console.log("Hello");
    },
    formatCartTotal(price) {
      return `${price}`;
    },
    formatQuantity(num) {
      const qtyNum = num === 1 ? `${num} unit` : `${num} units`;
      return qtyNum;
    },
    displayMessage() {
      console.log("Manu");
    },
    ...mapMutations({
      removeFromCart: "cart/remove"
    })
  }
};
</script>
<style scoped>
.button--delete {
  display: inline-block;
  border: 1px solid #35495e;
  padding: 5px;
}
.button--delete,
.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}
.button--green {
  border: 1px solid #3b8070;
}
.button--green,
.button--hero {
  display: inline-block;
  text-decoration: none;
  padding: 10px 30px;
}
</style>
