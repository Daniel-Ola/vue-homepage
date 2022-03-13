<template>
  <footer class="bg-dark-blue text-white">
    <div class="container mx-auto p-10">
      <div class="grid grid-cols-4 gap-6">
        <div class="flex flex-col gap-4">
          <div class="footer-logo">
            <img :src="$store.state.appLogo" alt="App Logo" />
          </div>
          <p class="text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil omnis
            animi adipisci eius illo ipsum odio! Iste aspernatur, iure quibusdam
            alias ex, optio dicta itaque ipsa molestias repellendus placeat
            sunt?
          </p>
          <p class="text-left">All rights reserved</p>
        </div>
        <div class="flex flex-1 gap-4 col-span-3 px-24 gap-48">
          <div class="footer-links flex flex-col gap-4 items-start">
            <h1 class="text-lg font-bold text-white">Landings</h1>
            <a href="#">Home</a>
            <a href="#">Products</a>
            <a href="#">Services</a>
          </div>
          <div class="footer-links flex flex-col gap-4 items-start">
            <h1 class="text-lg font-bold text-white">Company</h1>
            <a href="#">Home</a>
            <a href="#">Products</a>
            <a href="#">Services</a>
          </div>
          <div class="footer-links flex flex-col gap-4 items-start">
            <h1 class="text-lg font-bold text-white">Resources</h1>
            <a href="#">Home</a>
            <a href="#">Products</a>
            <a href="#">Services</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
// import AppLogo from

export default {
  name: "HomeFooter",
};
</script>
