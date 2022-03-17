<template>
  <section class="relative mt-10 mb-10">
    <div class="container bg-dark-blues mx-auto w-4/5 rounded-lg py-24">
      <h1 class="text-3xl font-bold text-dark-blue text-center mb-16">
        <p class="text-center mb-3 hidden sm:block">We've got a slippery DM.</p>
        <p class="text-center">Request a quote now!</p>
      </h1>

      <div class="request-form">
        <input
          type="email"
          class="sm:w-1/3 w-full sm-only:mb-5 bg-white text-black rounded-full h-[40px] pl-6 border-b-2 border-b-dark-blue"
          placeholder="Your email address"
        />
        <app-button
          text="Request Now"
          customs="rounded-full ml-5 bg-dark-blue text-white py-2 px-4"
        />

        <!-- <div class="absolute top-0 right-[135px] overflow-hidden">
                    <div class="relative w-52">
                        <img :src="ellipse" alt="" class="w-[100%]">
                    </div>
                </div> -->
      </div>
    </div>
  </section>
</template>

<script>
import Ellipse from "@/assets/images/Ellipse.png";
import AppButton from "@/components/AppButton.vue";

export default {
  name: "HomeRequestQuote",
  components: {
    AppButton,
  },
  data() {
    return {
      ellipse: Ellipse,
    };
  },
};
</script>
