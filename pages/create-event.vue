<template>
  <div>
      <h3>Create a new Event</h3>

      <form @submit.prevent="createEvent">
          <div>
              <label class="label" for="title">Title</label>
              <input required class="input input-bordered w-full max-w-xs" type="text" id="title" v-model="title">
          </div>
          <div>
              <label class="label" for="description">Description</label>
              <textarea required class="textarea w-fit textarea-bordered" id="description" v-model="description"></textarea>
          </div>
          <div>
              <label class="label" for="date">Date</label>
              <input required class="input input-bordered" type="date" id="date" v-model="date">
          </div>
          <div>
              <label class="label" for="time">Time</label>
              <input required class="input-bordered input" type="time" id="time" v-model="time">
          </div>
          <div>
              <label class="label" for="location">Location</label>
              <input required class="input input-bordered" type="text" id="location" v-model="location">
          </div>
          <div>
              <label class="label" for="image">Image</label>
              <input required class="file-input input-bordered" @change="uploadImage" type="file">
          </div>
          <button :disabled="!checkIfFormValid" class="btn" type="submit">Create</button>

      </form>
  </div>

</template>

<script setup lang="ts">
import {useEventsStore} from "~/store/events";
import {useAuthStore} from "~/store/auth";
import {Event} from "~/types";
const store = useEventsStore()
definePageMeta({
    title: "Create Event",
    middleware: 'auth'
})
const title = ref('')
const description = ref('')
const date = ref('')
const time = ref('')
const location = ref('')
const image = ref('')
const imageName = ref('')

const uploadImage = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = e => {
        image.value = e.target.result
        imageName.value = file.name
    }
}

const createEvent = () => {
    store.createEvent({
        title: title.value,
        description: description.value,
        date: date.value,
        time: time.value,
        location: location.value,
        organizer: useAuthStore().getToken,
        category: 'TestCategory',
        tags: ['tag1', 'tag2'],
        maxParticipants: 100,
        ticketInfo: {
            ticketTypes: [
                {
                    name: 'General Admission',
                }
            ],
            name: 'General Admission',
            price: 20,
            available: 100,
        },
        image: image.value,
        imageName: imageName.value,
    } as Event)
}

const checkIfFormValid = computed(() => {
    if (title.value === '') {
        return false
    }
    if (description.value === '') {
        return false
    }
    if (date.value === '') {
        return false
    }
    if (time.value === '') {
        return false
    }
    if (location.value === '') {
        return false
    }
    if (image.value === '') {
        return false
    }
    return true
})


</script>

<style scoped>

</style>