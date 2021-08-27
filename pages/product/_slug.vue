<template>
  <div class="column">
    <div>
      <div class="head">
        <h1>{{ product.Name }}</h1>
      </div>
      <!-- <div
      v-if="vechicle.images"
      id="banner"
      class="uk-height-small uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding"
      :data-src="getStrapiMedia(vechicle.images.url)"
      uk-img
    >
      
    </div> -->
      <!-- <div class="descript">
        <p>
          {{ vechicle.descriptions }}
        </p>
      </div> -->

      <!-- <div class="booking">
        <nuxt-link
          :to="{ name: 'booking-slug', params: { slug: vechicle.slug } }"
          tag="a"
        >
          Book Now
        </nuxt-link>
      </div> -->
       <br>
      <!-- <div class="relate">
        <h2>{{ vechicle.relative }}</h2>
      </div> -->
      <div class="gallery_container-all">
        <!-- <div
          class="gallery_container"
          v-for="image in vechicle.images"
          :key="image.id"
        >
          <img :src="getStrapiMedia(image.url)" height="40" />
        </div> -->
        <!-- {{vechicle.images}}  -->
      </div>
      <div class="uk-section">
        <!-- <div class="uk-container uk-container-small">
          eslint-disable vue/no-v-html -->
          <!-- <div
            v-if="vechicle.content"
            id="editor"
            v-html="$md.render(vechicle.content)"
          /> -->
          <!-- eslint-enable vue/no-v-html -->
          <!-- <p v-if="vechicle.published_at">
          {{ moment(vechicle.published_at).format("MMM Do YY") }}
        </p> -->
        </div> 
      </div>
    </div>
  <!-- </div> -->
</template>

<script>
import moment from "moment";
import { getStrapiMedia } from "../../utils/medias";
import { getMetaTags } from "../../utils/seo";

export default {
  middleware: "auth",
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
  data() {
    return {
      apiUrl: process.env.strapiBaseUri
    };
  },
  methods: {
    moment,
    getStrapiMedia
  }
  // head() {
  //   const { defaultSeo, favicon, siteName } = this.global;

  //   // Merge default and article-specific SEO data
  //   const fullSeo = {
  //     ...defaultSeo,
  //     metaTitle: this.vechicle.title,
  //     metaDescription: this.vechicle.description,
  //     shareImage: this.vechicle.image,
  //   };

  //   return {
  //     titleTemplate: `%s | ${siteName}`,
  //     title: fullSeo.metaTitle,
  //     meta: getMetaTags(fullSeo),
  //     link: [
  //       {
  //         rel: "favicon",
  //         href: getStrapiMedia(favicon.url),
  //       },
  //     ],
  //   };
  // },
};
</script>
<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  font: normal 20px montserrat;
  overflow-x: hidden;
}

/* Gallery Start */
.intro {
  margin-top: 70px;
  text-align: center;
  margin-bottom: 40px;
}

.gallery_container-all {
  width: 95%;
  margin: 20px auto;
  height: auto;
  margin-bottom: 40px;
}

.gallery_container {
  width: calc(33% - 6px);
  overflow: hidden;
  height: fit-content;
  margin: 3px;
  padding: 0;
  display: inline-block;
  position: relative;
  float: none;
  border-radius: 5px;
  background-color: black;
}

img {
  width: 100%;
  transition-duration: 0.3s;
  max-width: 100%;
  display: block;
  overflow: hidden;
  cursor: pointer;
}

.gallery_title {
  position: absolute;
  display: block;
  cursor: pointer;
  top: 35%;
  display: none;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  font-weight: bold;
  font-size: 1.6em;
  transition-duration: 0.3s;
}

.gallery_text {
  position: absolute;
  top: 70%;
  cursor: pointer;
  max-width: 80%;
  text-align: center;
  left: 50%;
  font-size: 1em;
  display: none;
  margin-right: -50%;
  transition-duration: 0.3s;
  transform: translate(-50%, -50%);
}

.gallery_container:hover img {
  transform: scale(1.2);
  transition-duration: 0.3s;
  opacity: 0.5;
}

.gallery_container:hover span {
  color: white;
  display: block;
  transition-duration: 0.3s;
}

@media only screen and (max-width: 800px) {
  .intro {
    margin-top: 40px;
  }
  .gallery_container {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
}
.relate {
  text-align: center;
  font-style: italic;
  color: yellow;
}
.head {
  text-align: center;
  font-style: italic;
  padding: 35px;
}
.descript {
  text-align: left;
  font-family: sans-serif;
  font-size: 15pt;
  color: #444;
  width: 85%;

  margin: 0 auto;
  font-style: italic;

  padding: 35px;
}
.booking {
  text-align: center;
  font-style: italic;
  font-size: 20px;
   width:200px;
  height: 3rem;
  
  padding: 0.3rem 1rem;
      margin-left: 646px;
  font-family: "Source Sans Pro", sans-serif;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1), 0 1px 1px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid #888;
  border-radius: 20px;
  transition: background-color 0.5s ease;
  background-color: yellow;

}
</style>
