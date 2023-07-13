<template>
  <div v-if="showReviewForm" class="max-w-[960px] pr-3 border-b border-black">
    <h4 class="mb-3">
      Add a Review
    </h4>
    <select
      class="select border-black select-bordered w-full max-w-full rounded-none mb-6"
    >
      <option disabled selected>
        Select ticekt for review
      </option>
      <option v-for="ticket in ticketsToReview.value" @click="setTicket(ticket._id)">
        {{ ticket.name }} @ {{ ticket.location_id.name }}
      </option>
    </select>
    <div class="mb-3">
      <input
        v-model="review.title"
        class="input border-black w-full rounded-none bg-transparent"
        placeholder="Review Title"
        type="text"
      >
    </div>
    <div class="mb-3">
      <textarea
        v-model="review.comment"
        class="textarea border-black rounded-none bg-transparent w-full"
        placeholder="Your Review"
      />
    </div>
    <div class="flex justify-between align-baseline mb-3">
      <div class="rating rating-lg self-center">
        <input checked class="mask mask-star" name="rating-1" type="radio" @click="setRating(1)">
        <input class="mask mask-star" name="rating-1" type="radio" @click="setRating(2)">
        <input class="mask mask-star" name="rating-1" type="radio" @click="setRating(3)">
        <input class="mask mask-star" name="rating-1" type="radio" @click="setRating(4)">
        <input class="mask mask-star" name="rating-1" type="radio" @click="setRating(5)">
      </div>
      <button
        class="btn bg-black text-white hover:bg-white hover:border-black hover:text-black rounded-none"
        @click="submitReview"
      >
        Submit
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useAuthStore } from '~/store/auth'

defineComponent({
  name: 'AddReview',
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
const ticketsToReview = ref([])
const config = useRuntimeConfig()
const authStore = useAuthStore()
const loading = ref(true)
const showReviewForm = ref(false)
const emit = defineEmits(['reviewSubmitted_loading', 'reviewSubmitted_success'])
const review = ref({
  title: '',
  comment: '',
  rating: 0,
  ticket_id: ''
})

const showSpinner = ref(false)

const setRating = (rating: number) => {
  review.value.rating = rating
}

const setTicket = (ticket_id: string) => {
  review.value.ticket_id = ticket_id
}
const fetchTickets = async () => {
  console.log('fetching')
  console.log(`${config.public.baseUrl}/tickets/get/review-ready`)
  // @ts-ignore
  const { data } = await useFetch(`${config.public.baseUrl}/tickets/get/review-ready`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${authStore.token}`
    },
    body: JSON.stringify({
      event_id: props.event_id,
      user_id: authStore.user._id
    })
  })
  console.log(data)
  ticketsToReview.value = data as Array<object>
  console.log(data.value.length)
  showReviewForm.value = data.value.length > 0
}

const submitReview = async () => {
  console.log('submitting')

  // @ts-ignore
  const { data } = await useFetch(`${config.public.baseUrl}/reviews/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${authStore.token}`
    },
    body: JSON.stringify({
      event_id: props.event_id,
      user_id: authStore.user._id,
      ticket_id: review.value.ticket_id,
      rating: review.value.rating,
      title: review.value.title,
      comment: review.value.comment
    })
  })
  await fetchTickets()
  emit('reviewSubmitted_success')
}

fetchTickets()
</script>

<style scoped>

</style>
