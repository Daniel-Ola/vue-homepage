<template>
  <div class="card bg-white rounded-md p-7 basis-1/3s w-1/4">
    <div class="details text-left">
      {{ testimonial.description }}
    </div>

    <div class="testimonial-profile grid grid-cols-4 text-left gap-4s mt-6">
      <div class="profile-image">
        <img
          :src="testimonial.image"
          alt="avatar"
          class="w-12 h-12 rounded-full"
        />
      </div>
      <div class="profile-details col-span-3">
        <p class="profile-name font-bold text-dark-blue">
          {{ testimonial.name }}
        </p>
        <p class="profile-role font-thin text-dark-blue text-sm">
          {{ testimonial.role }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeTestimonialItem",
  props: {
    testimonial: {
      type: Object,
      required: true,
    },
  },
  created() {
    console.log(this.testimonial);
  },
};
</script>
