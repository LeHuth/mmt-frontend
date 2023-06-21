<template>
  <div style="max-width: 1920px; height: 100dvh; margin: auto">
    <div style="min-height: calc(100dvh - 450px)">
      <slot />
    </div>

    <footer class="footer p-10 bg-white text-black border border-black">
      <div>
        <span class="footer-title">Services</span>
        <a class="link link-hover">Branding</a>
        <a class="link link-hover">Design</a>
        <a class="link link-hover">Marketing</a>
        <a class="link link-hover">Advertisement</a>
      </div>
      <div>
        <span class="footer-title">Company</span>
        <a class="link link-hover">About us</a>
        <a class="link link-hover">Contact</a>
        <a class="link link-hover">Jobs</a>
        <a class="link link-hover">Press kit</a>
      </div>
      <div>
        <span class="footer-title">Legal</span>
        <a class="link link-hover">Terms of use</a>
        <a class="link link-hover">Privacy policy</a>
        <a class="link link-hover" @click="navigateTo('/legal/cookie')">Cookie policy</a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Orga'
}
</script>

<style>
:root {
    --primary: black;
    --secondary: lightgray;
}

/* Scrollbar styles */

/* Firefox */
* {
    scrollbar-width: thin;
    scrollbar-color: var(--primary) var(--secondary);
    scroll-behavior: smooth;
}

/* Chrome, Edge, and Safari */
*::-webkit-scrollbar {
    width: 12px;
}

*::-webkit-scrollbar-track {
    background: var(--primary);
}

*::-webkit-scrollbar-thumb {
    background-color: var(--secondary);
    /*   background: repeating-linear-gradient(
        45deg,
        var(--secondary),
        var(--secondary) 5px,
        var(--primary) 5px,
        var(--primary) 10px
      ); */
    border-radius: 20px;
    border: 3px solid var(--primary);
}
</style>
