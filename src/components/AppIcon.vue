<template>
  <!-- <div> -->
  <i :class="fontClass"></i>
  <!-- </div> -->
</template>

<script>
export default {
  props: {
    icon: {
      required: true,
      type: String,
    },
    type: {
      type: String,
      default: "",
    },
    customize: {
      type: String,
      default: "",
    },
  },

  computed: {
    fontClass() {
      let iconClass = "";
      if (this.type.length == 0) {
        iconClass = `fa`;
      }
      if (this.type.length == 1) {
        iconClass = `fa${this.type}`;
      }
      if (this.type == "regular") {
        iconClass = `far`;
      }
      if (this.type == "solid") {
        iconClass = "fas";
      }

      iconClass += " fa-" + this.icon;

      return `${iconClass} ${this.customize}`;
    },
  },
};
</script>
