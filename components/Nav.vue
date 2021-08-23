<template>
  <header>
    <div class="navbar flex text-white relative">
      <header>
        <nav>
          <div class="logo">
            <Nuxt-link to="/"> Tyres&Alloy</Nuxt-link>
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
      </header>

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
    </div>
  </header>
</template>
<script>
import Nav from "./Nav.vue";
// import { mapGetters } from 'vuex'
export default {
  components: { Nav },
  name: "Nav",
  computed: {}
};
</script>
<style scoped>
* {
  margin: 0px;
  padding: 0px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.pad {
  padding: 15px 20px;
  display: inline;
}
.logo {
  font-style: italic;
}
body {
  font-family: "Roboto", sans-serif;
  background: #e2e2e2;
}

header {
  width: 100%;
  /* La medida queda a su criterio */
  height: 60vh;
  background: url(https://inspiredpixel.files.wordpress.com/2015/10/car-wheel-photographer-tim-wallace-commercial-photography-dymag-4.jpg)
    center center / cover no-repeat;
}

header nav {
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  background: linear-gradient(rgba(0, 0, 0, 0.8), transparent);
}

header nav .logo {
  font-size: 1.2em;
  color: #fff;
  padding: 30px;
}

header nav .put {
  margin-left: 800px;
  display: flex;
  list-style: none;
}

header nav .put {
  padding-left: 15px;
  display: block;
  padding: 15px 20px;
  text-decoration: none;
  color: #fff;
  font-size: 14px;
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
