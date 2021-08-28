<template>
  <header>
    <div class="navbar flex text-white relative">
      <!-- <header>
        <nav>
          <div class="logo">
            <Nuxt-link to="/">
              <img
                class="logo img-responsive replace-2xlogo"
                src="https://i.pinimg.com/originals/17/47/a9/1747a9e5512a1fe42d9fb072c2a35cd7.png"
              
                alt=""
              />
              <div class="web">
                Tyres&Alloy
              </div>
              </Nuxt-link>
            
          </div>
          <div class="put">
            <div class="pad">
              <Nuxt-link to="/"> All</Nuxt-link>
            </div>
            <div class="pad">
              <Nuxt-link to="/"> Car</Nuxt-link>
            </div>
            <div class="pad">
              <Nuxt-link to="/"> Bike</Nuxt-link>
            </div>
            <div class="pad">
              <Nuxt-link to="/"> Collection</Nuxt-link>
            </div>
          </div>
        </nav>
      </header> -->

      <!-- <div class="nav-item-center flex space-x-6 sm:space-x-20 p-5 mx-auto">
      <div class="name">
      <NuxtLink to="/">Tyres&Alloy</NuxtLink>
      </div>
      <NuxtLink to="/all">All</NuxtLink>
      <NuxtLink to="/men">Car</NuxtLink>
      <NuxtLink to="/women">Bike</NuxtLink>
    </div> 
     <div class="cart fixed bottom-0 right-0 shadow-md m-3"> 
      <p class="p-1 cartCount text-xs absolute top-0 right-0">
   
      </p> 
      <NuxtLink to="/cart">
        <p class="pt-3 px-2">Cart</p>
      </NuxtLink>
    </div>
   <div class="ham-menu shadow-md fixed bottom-0 right-0 m-3 sm:hidden">
      <p class="text-center pt-3">menu</p>
    </div> -->
      <!-- <div class="container">
        <nav class="navbar">
          <a href="#" class="logo">Tyres&Alloy</a>
          <ul class="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Contact</a></li>
            <button>Sign In</button>
            <button>Sign Up</button>
          </ul>
          <i class="fas fa-bars fa-2x" id="burger"></i>
        </nav>
        
      </div> -->

      <!-- <div class="video-container">
        <video
          src="https://storage.coverr.co/videos/GK300Fvvg4T1LYiC9SJpUAK36CDldcR7A?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjE0NzE0NjcxfQ.EnOnRFM1w-1SJY_AfEhhjR6S_dPgXx0lj1kKMvZheTk"
          autoplay
          loop
          muted
        ></video>
      </div> -->
      <div class="scroll-down"></div>
      <nav>
        <div class="logo">
          <NuxtLink to="/">
            <img
              src="https://i.pinimg.com/originals/17/47/a9/1747a9e5512a1fe42d9fb072c2a35cd7.png"
              alt="logo"
            />
            <div class="head">Tyres&Alloy</div>
          </NuxtLink>
        </div>
        <div class="page">
          <ul>
            <li v-for="page in pages" :key="page.id">
              <nuxt-link
                :to="{ name: 'page-slug', params: { slug: page.slug } }"
                tag="a"
              >
                {{ page.Name }}
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div id="navbarBasicExample" class="navbar-menu">
          <div v-if="isAuthenticated" class="navbar-start">
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                {{ loggedInUser.username }}
              </a>

              <div class="navbar-dropdown">
                <a class="navbar-item" href="/profile">My Profile</a>
                <hr class="navbar-divider" />
                <a class="navbar-item" @click="logout">Logout</a>
              </div>
            </div>
          </div>

          <div v-if="!isAuthenticated" class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <nuxt-link class="button is-primary" to="/register">
                  <strong>Register</strong>
                </nuxt-link>
                <nuxt-link class="button is-light" to="/login">
                  Log in
                </nuxt-link>
              </div>
            </div>
          </div>
          <div class="cart fixed bottom-0 right-0 shadow-md m-3">
            <p class="p-1 cartCount text-xs absolute top-0 right-0">
              {{ getCart.length }}
            </p>
            <NuxtLink to="/cart">
              <p class="pt-3 px-2">Cart</p>
            </NuxtLink>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>
<script>
import { mapGetters } from "vuex";
import Nav from "../components/Nav.vue";
// import { mapGetters } from 'vuex'
export default {
  name: "Nav",
  computed: {
    ...mapGetters(["isAuthenticated", "loggedInUser", 'getCart'])
  },
  methods: {
    async logout() {
      await this.$auth.logout();
    }
  },
  mounted() {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener("click", () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle("is-active");
          $target.classList.toggle("is-active");
        });
      });
    }
  },
  props: {
    pages: {
      type: Array
    }
  }
};
</script>
<style scoped>
/*  */
body {
  height: 1000px;
  font-family: "Arimo", sans-serif;
  font-weight: 700;
  background: orange;
}
.cartCount {
  background: #000;
  border-radius: 30%;
}
.cart {
  background-color: rgb(163, 87, 129);
  width: 3em;
  height: 3em;
  border-radius: 1.5em;
}
.buttons {
  margin-top: -97px;
  margin-right: 40px;
}
.navbar-brand {
  font-style: italic;
  font-size: 15px;
}
.uk-navbar-right {
  margin-left: 868px;
}
.navbar-link {
  margin-left: 1387px;
  margin-top: -79px;
}
.scroll-down {
  position: fixed;
  top: 50%;
  left: 50%;
  margin-left: -64px;
  margin-top: -64px;
  font-size: 128px;
  color: #fff;
}
.head {
  margin-left: 84px;
  margin-top: -42px;
  font-size: 33px;
  font-style: italic;
}
.page {
  text-align: center;
  /* margin-left: -23px; */
  margin-right: 282px;
}
.scroll-down p {
  margin: 0;
  font-size: 18px;
  text-align: center;
}

nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background: #333;
  font-weight: 700;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.9);
  transition: 0.3s;
}

nav .logo {
  position: relative;
  float: left;
  margin-right: 30px;
  line-height: 0;
  background: #222;
}

nav .logo:after,
nav .logo:before {
  position: absolute;
  content: "";
  top: 0;
  right: 0;
  width: 10px;
  height: 100%;
  background: #2a2a2a;
  transform: skewx(10deg);
}

nav .logo:before {
  right: -10px;
  background: #2f2f2f;
}

nav .logo img {
  height: 60px;
  margin: 10px 40px 10px 20px;
  transition: 0.3s;
}

nav ul {
  margin: 0;
}

nav li {
  display: inline-block;
  line-height: 80px;
  list-style: none;
  transition: 0.3s;
}

nav li a {
  display: block;
  padding: 0 20px;
  color: #fff;
  text-decoration: none;
}

nav li:hover {
  background: #555;
}

nav.mobile {
  height: 50px;
  font-weight: 400;
}

nav.mobile .logo img {
  height: 30px;
  margin: 10px 40px 10px 20px;
}

nav.mobile li {
  line-height: 50px;
}
/* @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap");

* {
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}

body {
  margin: 0;
  overflow-x: hidden;
}

header {
  min-height: 100vh;
  position: relative;
}
.container {
  max-width: 500px;
  margin: 0 auto;
  padding: 1rem 2rem;
}
.navbar {
  min-height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo {
  font-size: 2.25rem;
  text-decoration: none;
  text-transform: uppercase;
  color: #fff;
  font-weight: 700;
}
.nav-links {
  display: flex;
  align-items: center;
}
li {
  list-style-type: none;
}
a {
  text-decoration: none;
  color: #fff;
  margin: 0 1.25rem;
  font-weight: 500;
  font-size: 1.05rem;
  position: relative;
}
::after {
  position: absolute;
  content: "";
  background-color: #fff;
  bottom: -5px;
  left: 0;
  width: 0%;
  height: 3px;
  transition: 0.3s ease all;
}
:hover::after {
  width: 100%;
}

button {
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0.75rem 1rem;
  margin: 0 1rem;
  border-radius: 6px;
  background: transparent;
  border: 2px solid #fff;
  color: #fff;
  font-weight: 500;
}

i {
  display: none;
  color: #fff;
  cursor: pointer;
}

.showcase {
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 35rem;
}
h1 {
  color: #fff;
  font-size: 2.5rem;
  margin-bottom: 0;
  font-weight: 700;
  margin-bottom: 1rem;
}
p {
  margin-top: 0;
  color: #fff;
  font-weight: 500;
  line-height: 1.4;
  font-size: 0.9rem;
  width: 30rem;
}
button {
  margin-top: 1rem;
  background-color: #000;
  color: #fff;
  border: none;
  outline: none;
  padding: 1rem 1.5rem;
  font-size: 0.9rem;
  border-radius: 6px;
  cursor: pointer;
}

.video-container {
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
}
video {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.82);
}

@media (max-width: 850px) {
  .header .container .container .nav-links {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #fff;
    height: 100%;
    width: 225px;
    margin: 0;
    padding: 0;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    transform: translateX(-100%);
    transition: 0.4s ease all;
    z-index: 10;
  }
  li a {
    color: #000;
  }
  ::after {
    background-color: #000;
  }
}

button {
  border-color: #000;
  color: #000;
  padding: 0.75rem 1.5rem;
}
.active {
  transform: translateX(0%);
}

i {
  display: block;
}

.showcase {
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
}
h1 {
  font-size: 2.25rem;
}

@media (max-width: 500px) {
  header .container .showcase h1 {
    font-size: 2.1rem;
  }
  p {
    font-size: 0.85rem;
    width: 300px;
  }
}

.ham-menu {
  background-color: #000;
  width: 3em;
  height: 3em;
  border-radius: 1.5em;
}
.cart {
  background-color: rgb(163, 87, 129);
  width: 3em;
  height: 3em;
  border-radius: 1.5em;
}
.navbar {
  background-color: rgb(24, 20, 22);
}
.cartCount {
  background: #000;
  border-radius: 30%;
}
.name {
  margin-right: 700px;
  font-style: italic;
  font-size: 25px;
  color: red;
} */
/* 
$warning:#ffdd57;
$white:#fff;
$primary:#15038C;
$secondary:#DF0045;
$dark:#253840;
$success:#23d160;
$default:#1a1a1a;
$info:#209cee;
$link:#3273dc;
$fairuz:#01597C;
$danger:#ff3860; */
</style>
