<template>
  <section class="relative bg-dark-blue sm:p-24 p-20">
    <h2 class="testimonial-heading text-3xl text-white font-light text-left">
      An enterprise staffing solution for your company
    </h2>

    <div
      class="lg:flex lg:flex-row lg:flex-1 mt-16 lg:gap-4 items-centers justify-center grid grid-cols-2 sm-only:grid-cols-1 gap-10 justify-center"
    >
      <home-testimonial-item
        v-for="(testimonial, index) in testimonials"
        :key="index"
        :testimonial="testimonial"
      />
      <!-- <home-testimonial-item /> -->
    </div>
  </section>
</template>

<script>
import HomeTestimonialItem from "@/components/HomeTestimonialItem.vue";

export default {
  name: "HomeTestimonials",
  components: {
    HomeTestimonialItem,
  },
  data() {
    return {
      testimonials: [
        {
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis repellendus nostrum asperiores.",
          name: "Firstname Lastname",
          role: "Manager @ GoodCompany.org",
          image: "https://randomuser.me/api/portraits/lego/0.jpg",
        },
        {
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis repellendus nostrum asperiores.",
          name: "Firstname Lastname",
          role: "Manager @ GoodCompany.org",
          image: "https://randomuser.me/api/portraits/lego/8.jpg",
        },
        {
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis repellendus nostrum asperiores.",
          name: "Firstname Lastname",
          role: "Manager @ GoodCompany.org",
          image: "https://randomuser.me/api/portraits/lego/6.jpg",
        },
      ],
    };
  },
};
</script>
