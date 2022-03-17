<template>
  <section class="relative pt-14 mb-24 px-16">
    <h3 class="mb-3 font-light text-lg">Our services</h3>
    <h2 class="font-light text-3xl mb-3">
      Blue-collar and maintenance<br />solutions
    </h2>

    <aos-vue
      animation="fade-in"
      :duration="600"
      :delay="300"
      :once="true"
      class="sm:flex sm:flex-1 grid grid-cols-1 sm-only:gap-4 justify-center mt-4 lg:gap-24 mt-10"
    >
      <!--  *easing="ease" :offset="50" -->
      <!-- <div class="flex flex-1 justify-center mt-4 gap-24 mt-10"> -->
      <!-- <div> -->
      <home-services-card
        :img="service.img"
        :title="service.title"
        :details="service.details"
        v-for="(service, index) in services"
        :key="index"
        class="ml-3"
      />
      <!-- </div> -->
      <!-- </div> -->
    </aos-vue>

    <div class="content-center justify-center mt-28">
      <div
        class="flex flex-1 basis-full md:flex-row flex-col items-center sm:gap-36 gap-10 lg:px-32 justify-center mt-16"
      >
        <aos-vue
          :once="true"
          animation="fade-down"
          :duration="600"
          :delay="300"
          class="item-image sm:w-1/2 w-full"
        >
          <div class="caller-image">
            <img :src="servicesCaller" alt="" />
          </div>
        </aos-vue>
        <aos-vue
          :once="true"
          animation="fade-left"
          :duration="600"
          :delay="300"
          class="flex flex-col gap-4 text-left sm:w-1/2 w-full sm:ml-5"
        >
          <h3 class="font-black md-only:font-bold lg:text-2xl text-xl">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </h3>
          <ul class="flex flex-col gap-5 mt-7">
            <li class="flex">
              <div>
                <app-icon
                  icon="check"
                  customize="rounded-full bg-dark-blue text-white p-1 mr-4"
                />
              </div>
              We connect artisans with prospective employers
            </li>
            <li class="flex">
              <div>
                <app-icon
                  icon="check"
                  customize="rounded-full bg-dark-blue text-white p-1 mr-4"
                />
              </div>
              We provide training and certification for our clients
            </li>
            <li class="flex">
              <div>
                <app-icon
                  icon="check"
                  customize="rounded-full bg-dark-blue text-white p-1 mr-4"
                />
              </div>
              We assist companies in staffing
            </li>
          </ul>
          <div class="mt-7">
            <app-button
              text="Get Started"
              customs="bg-dark-blue text-white rounded-full w-32 py-3"
            />
          </div>
        </aos-vue>
      </div>

      <div
        class="flex flex-1 basis-full md:flex-row-reverse flex-col items-center sm:gap-36 gap-10 lg:px-32 justify-center mt-48"
      >
        <aos-vue
          :once="true"
          animation="fade-down"
          :duration="600"
          :delay="300"
          class="item-image sm:w-1/2 w-full"
        >
          <div class="caller-image">
            <img :src="servicesCaller" alt="" />
          </div>
        </aos-vue>
        <aos-vue
          :once="true"
          animation="fade-left"
          :duration="600"
          :delay="300"
          class="flex flex-col gap-4 text-left sm:w-1/2 w-full sm:mr-5"
        >
          <h3
            class="font-black md-only:font-bold lg:text-2xl text-xl sm-only:text-sms sm-only:mt-4"
          >
            We connect our customers with the best, and help them keep up-and
            stay open.
          </h3>
          <ul class="flex flex-col gap-5 mt-7 list-outside">
            <li class="flex">
              <div>
                <app-icon
                  icon="check"
                  customize="rounded-full bg-dark-blue text-white p-1 mr-4"
                />
              </div>
              We connect artisans with prospective employers
            </li>
            <li class="flex">
              <div>
                <app-icon
                  icon="check"
                  customize="rounded-full bg-dark-blue text-white p-1 mr-4"
                />
              </div>
              We provide training and certification for our clients
            </li>
            <li class="flex">
              <div>
                <app-icon
                  icon="check"
                  customize="rounded-full bg-dark-blue text-white p-1 mr-4"
                />
              </div>
              We assist companies in staffing
            </li>
          </ul>
          <div class="mt-7">
            <app-button
              text="Get Started"
              customs="bg-dark-blue text-white rounded-full w-32 py-3"
            />
          </div>
        </aos-vue>
      </div>
    </div>
  </section>
</template>

<script>
import HomeServicesCard from "@/components/HomeServicesCard.vue";
import AppIcon from "@/components/AppIcon.vue";
import AppButton from "@/components/AppButton.vue";

import servicesStaffing from "@/assets/images/services-staffing.png";
import servicesMaintenance from "@/assets/images/services-maintenance.png";
import servicesCaller from "@/assets/images/services-caller.png";
import servicesGraph from "@/assets/images/services-graph.png";

export default {
  name: "HomeServices",

  components: {
    HomeServicesCard,
    AppIcon,
    AppButton,
  },

  data() {
    return {
      servicesStaffing,
      servicesMaintenance,
      servicesCaller,
      servicesGraph,

      services: [
        {
          title: "Staffing solutions",
          details:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          img: servicesStaffing,
        },
        {
          title: "Maintenance solutions",
          details:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          img: servicesMaintenance,
        },
      ],
    };
  },
};
</script>
