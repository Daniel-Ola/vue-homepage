<template>
  <!-- <HomeHero /> -->
  <div>
    <home-hero />
    <home-services />
    <home-testimonials />
    <home-request-quote />
    <home-footer />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";HelloWorld,
import HomeHero from "@/components/HomeHero.vue";
import HomeServices from "@/components/HomeServices.vue";
import HomeTestimonials from "@/components/HomeTestimonials.vue";
import HomeRequestQuote from "@/components/HomeRequestQuote.vue";
import HomeFooter from "@/components/HomeFooter.vue";

export default {
  name: "HomeView",
  components: {
    HomeHero,
    HomeServices,
    HomeTestimonials,
    HomeRequestQuote,
    HomeFooter,
  },
};
</script>
