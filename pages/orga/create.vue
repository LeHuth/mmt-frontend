<template>
    <div>
        <div class="grid grid-cols-2 border border-black py-20">
            <div>
                <div class="ml-auto mr-auto max-w-2xl h-full border flex flex-col justify-end border-black"
                     style="max-height: 680px">
                    <div class="flex justify-center align-middle h-full">
                        <div class="stack h-fit self-center">
                            <img v-for="image in uploadImgArray" :src="image.data" alt="image"
                                 class="object-scale-down max-w-lg max-h-lg"/>
                        </div>
                    </div>

                    <label class="btn rounded-none">
                        <input class="hidden" type="file" @change="upload"/>
                        <span class="">Upload Image</span>
                    </label>
                </div>
            </div>
            <div>
                <div class="ml-auto mr-auto max-w-2xl">
                    <div class="form-control w-full">
                        <MMTBasicTextInput
                                class="mb-6"
                                title="Titel"
                                @input="value => name = value"/>
                        <MMTBasicTextInput
                                class="mb-6"
                                title="Price"
                                @input="value => price = value"/>
                        <MMTBasicTextInput
                                class="mb-6"
                                title="Quip"
                                @input="value => quip = value"/>
                    </div>
                    <div class="divider before:bg-opacity-100 after:bg-opacity-100"></div>
                    <div class="join w-full my-6">
                        <label class="join-item self-center py-3  text-center h-12 rounded-none w-20 bg-gray-300">
                            <span class="label-text">Place</span>
                        </label>
                        <searchbar
                                :emit-input="true"
                                :events="placesArray.value"
                                :is-bordered="false"
                                class="join-item w-full"
                                @input="value => filterPlaces(value)"
                                @select="value => eventplace = value"
                        />

                    </div>
                    <div class="flex w-full mb-6">
                        <input @input="date = $event.target.value" class="input border-black w-full rounded-none" type="date">
                        <div class="divider divider-horizontal before:bg-opacity-100 after:bg-opacity-100"/>
                        <input @input="time = $event.target.value" class="input border-black w-full rounded-none" type="time">
                    </div>

                    <button @click="composeHappening" :disabled="!validateHappeningInputs" class="btn w-full rounded-none mb-3">Add Date</button>
                    <p class="link mb-6">{{happenings.length}} Happenings</p>
                    <div class="divider before:bg-opacity-100 after:bg-opacity-100"></div>
                    <textarea
                      @change="description = $event.target.value"
                            class="textarea w-full textarea-bordered resize-none rounded-none border border-black mt-6"
                            placeholder="Description"/>
                </div>
            </div>
        </div>
        <button :disabled="!validateEventInputs" @click="sumbitEvent" class="btn w-full rounded-none">Create</button>
    </div>
</template>

<script lang="ts" setup>
import MMTBasicTextInput from "~/components/orga/MMTBasicTextInput.vue";
import Searchbar from "~/components/search/searchbar.vue";
import {IEvent, IEventHappening, IEventPlace} from "~/types";
import {useEventsStore} from "~/store/events";
import {useAuthStore} from "~/store/auth";

definePageMeta({
    title: 'Create',
    description: 'Create',

})
const placesArray = ref([])
const uploadImgArray = ref([])

const name = ref('')
const price = ref('')
const quip = ref('')
const eventplace:IEventPlace = ref({})
const happenings:IEventHappening = ref([])
const time = ref('')
const date = ref('')
const description = ref('')

// show the image
const upload = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
        uploadImgArray.value.push({data:reader.result,name: file.name})
    }
}

const filterPlaces = async (query_param) => {
    const {data} = await useFetch('http://localhost:8080/event-locations/filter', {
        query: {
            name: query_param
        }
    })
    placesArray.value = data
}

const composeHappening = () => {
    const happening = {
        place: eventplace.value,
        time: time.value,
        date: date.value,
    } as IEventHappening
    happenings.value.push(happening)
    clearHappeningInputs()
}

const validateHappeningInputs =computed( () => {
    return eventplace && time.value && date.value
})

const clearHappeningInputs = () => {
    eventplace.value = {}
    time.value = ''
    date.value = ''
}

const validateEventInputs = computed(() => {
    console.log(!!name.value, !!price.value, !!quip.value, happenings.value.length > 0, !!description.value)
    //console.log(!name.value && !price.value && !quip.value && !happenings.value.length > 0 && !description.value)
    return !!name.value && !!price.value && !!quip.value && happenings.value.length > 0 && !!description.value && uploadImgArray.value.length > 0
})

const sumbitEvent = () => {
    const event = {
        name: name.value,
        price: price.value,
        quip: quip.value,
        happenings: happenings.value,
        description: description.value,
        images: uploadImgArray.value,
        organizer: useAuthStore().getUserId,
        available: 100,
    } as IEvent
    console.log(event)
    const eventsStore = useEventsStore()
    eventsStore.createEvent(event)
}
</script>

<style scoped>
.rounded-none {
    border-radius: 0px !important;
}

::-webkit-date
</style>