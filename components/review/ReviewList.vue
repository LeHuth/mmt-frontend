<template>
  <div class="max-w-[960px]">
    <div v-for="review in reviews" :key="review" class="border-b border-black mb-3 pb-3">
      <review-item :review="review" />
    </div>
    <button
      v-if="false"
      class="btn bg-black text-white hover:bg-white hover:border-black hover:text-black w-full rounded-none"
    >
      load more
    </button>
  </div>
</template>

<script lang="ts" setup>

import { useAuthStore } from '~/store/auth'

defineComponent({
  name: 'ReviewList',
  props: {
    event_id: String
  }
})

const props = defineProps({
  event_id: {
    type: String,
    required: true
  }
})

const reviews = ref([])
const authStore = useAuthStore()

const fetchReviews = async () => {
  const config = useRuntimeConfig()
  const { data } = await useFetch(`${config.public.baseUrl}/reviews/get/event/${props.event_id}`, {
    headers: {
      Authorization: `Bearer ${authStore.token}`
    }
  })

  reviews.value = data.value as Array<object>
}

fetchReviews()

</script>

<style scoped>

</style>
