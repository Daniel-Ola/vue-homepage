<template>
  <section class="relative bg-dark-blue p-24">
    <h2 class="testimonial-heading text-3xl text-white font-light text-left">
      An enterprise staffing solution for your company
    </h2>

    <div class="flex flex-row flex-1 mt-16 gap-4 items-center justify-center">
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
