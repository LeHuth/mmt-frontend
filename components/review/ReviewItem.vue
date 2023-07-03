<template>
  <div class="flex gap-3">
    <nuxt-img class="w-[80px]" format="webp" quality="10" src="https://thispersondoesnotexist.com/" />
    <div>
      <div class="flex mb-3">
        <div class="rating rating-sm self-center">
          <input class="mask mask-star" name="rating-1" type="radio">
          <input checked class="mask mask-star" name="rating-1" type="radio">
          <input class="mask mask-star" name="rating-1" type="radio">
          <input class="mask mask-star" name="rating-1" type="radio">
          <input class="mask mask-star" name="rating-1" type="radio">
        </div>
        <span class="ml-3">User @ sat 07.05.23</span>
      </div>

      <h5 class="font-size-26 mb-1">
        Title
      </h5>
      <p class="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReviewItem'
}
</script>

<style scoped>

</style>
