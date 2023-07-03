<template>
  <div class="max-w-[960px] pr-3 border-b border-black">
    <h4 class="mb-3">
      Add a Review
    </h4>
    <div class="mb-3">
      <input
        class="input border-black w-full rounded-none bg-transparent"
        placeholder="Review Title"
        type="text"
      >
    </div>
    <div class="mb-3">
      <textarea
        class="textarea border-black rounded-none bg-transparent w-full"
        placeholder="Your Review"
      />
    </div>
    <div class="flex justify-between align-baseline mb-3">
      <div class="rating rating-lg self-center">
        <input class="mask mask-star" name="rating-1" type="radio">
        <input checked class="mask mask-star" name="rating-1" type="radio">
        <input class="mask mask-star" name="rating-1" type="radio">
        <input class="mask mask-star" name="rating-1" type="radio">
        <input class="mask mask-star" name="rating-1" type="radio">
      </div>
      <button class="btn bg-black text-white hover:bg-white hover:border-black hover:text-black rounded-none">
        Submit
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineComponent({
  name: 'AddReview'
})
</script>

<style scoped>

</style>
