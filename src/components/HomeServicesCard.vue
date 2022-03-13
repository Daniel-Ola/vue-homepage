<template>
  <div class="flex justify-center">
    <div class="rounded-lg shadow-lg bg-white max-w-sm">
      <a href="#!">
        <img class="rounded-t-lg w-full" :src="img" alt="not found" />
      </a>
      <div class="p-6 flex items-start flex-col">
        <h5 class="text-gray-900 text-xl font-medium mb-2">{{ title }}</h5>
        <p class="text-gray-700 text-base mb-4 text-left">
          {{ details }}
        </p>
        <button
          class="inline-block py-2.5 border-b-2 border-b-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase text-left"
        >
          Get Started
          <span class="ml-3">&#8594;</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeServicesCard",
  props: {
    title: String,
    details: String,
    img: String,
  },
};
</script>
