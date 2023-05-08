<template>
  <div>
      {{route.params.id}}
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
definePageMeta({
    title: 'Profile',
    middleware: ['auth'],
})

</script>

<style scoped>

</style>