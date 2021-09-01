export const state = () => ({
    wheelscollectionProducts: [],
    featuredProducts: [],
    carProducts: [],
    bikeProducts: [],
    cartItems: [],

  })
export const getters = {
    isAuthenticated(state) {
    return state.auth.loggedIn;
    },
   
    loggedInUser(state) {
    return state.auth.user;
    },
    /* 
    return items from store
  */
  wheelscollectionProducts: (state) => state.wheelscollectionProducts,
  featuredProducts: (state) => state.featuredProducts,
  carProducts: (state) => state.carProducts,
  bikeProducts: (state) => state.bikeProducts,
  getCart: (state) => state.cartItems,
  getCartTotal: (state) =>
    state.cartItems.length < 1
      ? '0'
      : state.cartItems
          .map((el) => el.price * el.quantity)
          .reduce((a, b) => a + b),
   }
   export const actions = {
    async addItemToCart({ commit }, cartItem) {
      await commit('setCartItem', cartItem)
    },
    async deleteCartItem({ commit }, id) {
      await commit('removeCartItem', id)
    },
}   
export const mutations = {
    setProducts: (state, products) => (state.wheelscollectionProducts = products),
    setFeaturedProducts: (state, products) => (state.featuredProducts = products),
    setCarProducts: (state, products) => (state.carProducts = products),
    setBikeProducts: (state, products) => (state.bikeProducts = products),
    setCartItem: (state, item) => state.cartItems.push(item),
    removeCartItem: (state, id) =>
      state.cartItems.splice(
        state.cartItems.findIndex((el) => el.id === id),
        1
      ),
  }