<!-- Use preprocessors via the lang attribute! e.g. <template lang="pug"> -->
<template>
  <div id="app">
    <div class="fill-screen">
      <div
        v-for="card in cards"
        class="img"
        :key="card.id"
        :style="{ display: active_card.id != card.id ? 'none' : '' }"
      >
        <div class="curd">
          <img :src="card.img" />
        </div>
      </div>
      <div class="dots">
        <span
          :class="{ dot: true, active: dot.id == active_slide }"
          v-for="dot in cards"
          :key="dot"
          @click="this.activate(dot.id)"
        >
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroSlider",
  created() {
    console.log("here");
    if (this.auto_animate) {
      this.interval = setInterval(() => {
        this.active_slide =
          this.active_slide == this.cards.length
            ? 1
            : (this.active_slide + 1) % (this.cards.length + 1);
      }, 5000);
    }
  },
  data() {
    return {
      auto_animate: true,
      cards: [
        {
          img:
            "https://www.platiindia.com/images/BannerImages/banner-4040211626252828085348.jpg",
          id: 1
        },
        {
          img:
            "https://www.platiindia.com/images/BannerImages/banner-7555991626252796085316.jpg",
          id: 2
        },
        {
          img:
            "https://www.platiindia.com/images/BannerImages/banner-4040211626252828085348.jpg",
          id: 3
        }
      ],
      active_slide: 1
    };
  },
  methods: {
    activate(id) {
      this.active_slide = id;
    }
  },
  computed: {
    active_card: function() {
      return this.cards.filter(card => card.id == this.active_slide)[0];
    }
  }
};
</script>

<!-- Use preprocessors via the lang attribute! e.g. <style lang="scss"> -->
<style>
* {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  height: 100vh;
  overflow: hidden;
}
.fill-screen {
  position: relative;
}
.dots {
  position: absolute;
  bottom: 15px;
  left: 50%;
  padding: 10px;
  background: #777777aa;
  border-radius: 25px;
}
.dot.active {
  width: 20px;
  background: lightgray;
  border-radius: 8px;
}

.dot {
  width: 8px;
  height: 8px;
  background: lightgray;
  display: inline-block;
  margin: 0 4px;
  border-radius: 8px;
  transition: width 1.1s ease-in;
  box-shadow: 1px 1px 9px 2px grey;
  cursor: pointer;
}
.curd {
  width: 100%;
  height: 80vh;
  transition: opacity 0.5s ease;
}
</style>
