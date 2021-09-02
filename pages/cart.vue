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
    return {
      productItems: {},
      session: {},
      stripe: {},
      stripePromise: {}
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    ...mapGetters(["getCart", "getCartTotal"])
  },
  //  numberOfItems() {
  //     return this.$store.getters['cart/numberOfItems']
  //   },
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
      const quantityNum = num === 1 ? `${num} unit` : `${num} units`;
      return quantityNum;
    },
    // displayMessage() {
    //   console.log("Manu");
    // },
    ...mapMutations({
      removeFromCart: "cart/remove"
    }),
    numberOfItems() {
      return this.$store.getters["cart/numberOfItems"];
    },
  
  async handleSubmit(e) {
    e.preventDefault();
    const response = await this.http.post(`http://localhost:1337/orders`, {
      cartDetail: this.getCart,
      cartTotal: this.getCartTotal.toFixed(2)
    });
    this.$swal({
      title: "Please wait",
      text: "redirecting you to stripe, click ok",
      icon: "success",
      button: "Ok"
    });

    const stripePromise = loadStripe(
      "sk_test_51IgTE6SEtraFFPFEOWiZ2oMZcksbag4It9XDeV62kdeg4qoEH8Kl0SSSksaiNwP20sa5UwhCQQ4BhCtVyp8yMlN000cM3djDLS"
    );
    const session = response;
    const stripe = await stripePromise;
    const result = await stripe.redirectToCheckout({
      sessionId: session.id
    });
    console.log(response);
    if (result.error) {
      this.$nuxt.context.error(result.error.message);
    }
  },

  displayMessage() {
    if (this.$route.query.success) {
      this.$swal({
        title: "Order placed!",
        text: "Thanks for placing your orders",
        icon: "success",
        button: "Ok"
      });
    } else if (this.$route.query.canceled) {
      this.$swal({
        title: "Order canceled!",
        text: "continue to shop around and checkout when you're ready.",
        icon: "warning",
        button: "Ok"
      });
    }
  },
  formatCartTotal(num) {
    if (num > 0) {
      return num.toFixed(2);
    } else {
      return num;
    }
  },
  ...mapActions(["deleteCartItem"])
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
