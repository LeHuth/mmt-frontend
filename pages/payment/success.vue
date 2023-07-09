<template>
  <div class="container mx-auto">
    <div class="flex flex-col items-center justify-center">
      <h1 class="text-4xl font-bold">
        Success! Thank you for your order!
      </h1>
      <p class="text-xl">
        Please keep an eye on your inbox. We'll be sending an email shortly with your ticket and invoice
        attached. If you need any assistance, feel free to reach out to us.

        Thanks again for choosing us!
      </p>
      <button class="btn" @click="navigateTo('/')">
        Return to Home
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Success'
}
</script>

<style scoped>

</style>
