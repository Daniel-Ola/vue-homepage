<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->

  <header class="bg-dark-blue h-screen md-only:h-full">
    <nav class="container flex item-center sm:py-12 mx-auto">
      <div class="py-1">
        <img :src="$store.state.appLogo" alt="" />
      </div>
      <ul
        class="z-10 hidden sm:flex flex-1 justify-end items-center gap-12 text-white uppercase text-xs"
      >
        <!-- <li class="cursor-pointer">Features</li> -->
        <button
          type="button"
          class="bg-white text-dark-blue font-bolder rounded-md px-7 py-3 uppercase"
        >
          Get Started
        </button>
      </ul>
    </nav>

    <div class="container flex item-center mt-4 mx-auto p-3 gap-[200px]">
      <div
        class="flex flex-col lg:basis-1/2 gap-10 items-center lg:items-start lg:w-full w-1/2 mx-auto justify-center lg:justify-start text-white py-4 md-only:py-0"
      >
        <h2 class="text-5xl font-light text-center lg:text-left md-only:mb-7">
          Blue-collar Staffing & Maintenance Solutions
        </h2>
        <!-- <p>Hire Blue-colar staff and get maintenance for your company</p> -->
        <p class="text-justify md-only:text-center md-only:mb-7">
          At ArtisanOga we make it easy for businesses to hire bluecollar
          workers across Nigeria. Currently we have verified professionals in
          over 30 categories ranging from tailors, to beauticians, to plumbers,
          and tailors. We're a tight-knit and highly-collaborative team of
          developers, hustlers, planners, and doers.
        </p>
        <button class="bg-[#69E6A6] text-dark-blue rounded-md p-3">
          Get Started
        </button>
      </div>

      <div class="lg:flex basis-1/2 z-10 hidden">
        <img :src="artisan_example" alt="" />
      </div>
    </div>

    <div class="lg:absolute top-0 right-0 overflow-hidden hidden">
      <div class="relative -right-12 -top-12">
        <img :src="ellipse" alt="" />
      </div>
    </div>
  </header>
</template>

<script>
import Ellipse from "@/assets/images/Ellipse.png";
import artisanExample from "@/assets/images/artisan-example2.png";

export default {
  name: "HomeHero",
  data() {
    return {
      ellipse: Ellipse,
      artisan_example: artisanExample,
    };
  },
};
</script>
