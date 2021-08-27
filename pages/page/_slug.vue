<template>
  <div>
      <div class="uk-section">
        <div class="uk-container uk-container-large">
          <h1>{{ page.Name }}</h1>
        <p>{{page.description}}</p>
        </div>
      </div>
  </div>
</template>

<script>

import { getMetaTags } from "../../utils/seo";
import { getStrapiMedia } from "../../utils/medias";

export default {

  async asyncData({ $strapi, params }) {
    const matchingPages = await $strapi.find("pages", {
      slug: params.slug,
    });
    console.log(matchingPages)

    return {
      page: matchingPages[0]
     
      // global: await $strapi.find("global"),
    };
  },
  // head() {
  //   const { defaultSeo, favicon, siteName } = this.global;

  //   // Merge default and article-specific SEO data
  //   const fullSeo = {
  //     ...defaultSeo,
  //     metaTitle: `${this.page.title} page`,
  //     metaDescription: `All articles about ${this.page.title}`,
  //   };

  //   return {
  //     title: fullSeo.metaTitle,
  //     titleTemplate: `%s | ${siteName}`,
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
