<template>
  <div class="max-w-[960px]">
    <div v-for="review in [1,2,3,4]" :key="review" class="border-b border-black mb-3 pb-3">
      <review-item />
    </div>
    <button class="btn bg-black text-white hover:bg-white hover:border-black hover:text-black w-full rounded-none">
      load more
    </button>
  </div>
</template>

<script lang="ts" setup>

defineComponent({
  name: 'ReviewList',
  props: {
    reviews: Array
  }
})
</script>

<style scoped>

</style>
