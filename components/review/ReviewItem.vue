<template>
  <div class="flex gap-3">
    <nuxt-img class="w-[80px]" format="webp" quality="10" src="https://thispersondoesnotexist.com/" />
    <div class="w-full">
      <div class="flex justify-between mb-3">
        <div class="rating rating-sm self-center">
          <input
            :checked="props.review.rating == 1"
            class="mask mask-star"
            disabled
            name="rating-1"
            type="radio"
          >
          <input
            :checked="props.review.rating == 2"
            class="mask mask-star"
            disabled
            name="rating-1"
            type="radio"
          >
          <input
            :checked="props.review.rating == 3"
            class="mask mask-star"
            disabled
            name="rating-1"
            type="radio"
          >
          <input
            :checked="props.review.rating == 4"
            class="mask mask-star"
            disabled
            name="rating-1"
            type="radio"
          >
          <input
            :checked="props.review.rating == 5"
            class="mask mask-star"
            disabled
            name="rating-1"
            type="radio"
          >
        </div>
        <span class="ml-3">{{ props.review.first_name }} {{
          props.review.last_name
        }} @ {{ new Date(props.review.timestamp).toLocaleDateString() }}</span>
      </div>

      <h5 class="font-size-26 mb-1">
        {{ props.review.title }}
      </h5>
      <p class="">
        {{ props.review.comment }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineComponent({
  name: 'ReviewItem',
  props: {
    review: {
      type: Object,
      required: true
    }
  }
})

const props = defineProps({
  review: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>

</style>
