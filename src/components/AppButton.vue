<template>
  <button :type="type" :class="customs">
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
      default: "Button",
    },
    type: {
      type: String,
      default: "button",
    },
    customs: {
      type: String,
    },
  },
};
</script>
