<template>
    <div>
        <div class="grid grid-cols-2 border border-black py-20">
            <div>
                <div class="ml-auto mr-auto max-w-2xl h-full border flex flex-col justify-end border-black"
                     style="max-height: 680px">
                    <div class="flex justify-center align-middle h-full">
                        <div class="stack h-fit self-center">
                            <img v-for="image in uploadImgArray" :src="image" alt="image"
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
                        <MMTBasicTextInput class="mb-6" title="Titel"/>
                        <MMTBasicTextInput class="mb-6" title="Price"/>
                        <MMTBasicTextInput class="mb-6" title="Quip"/>
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
                        />

                    </div>
                    <div class="flex w-full mb-6">
                        <input class="input border-black w-full rounded-none" type="date">
                        <div class="divider divider-horizontal before:bg-opacity-100 after:bg-opacity-100"/>
                        <input class="input border-black w-full rounded-none" type="time">
                    </div>

                    <button class="btn w-full rounded-none mb-3">Add Date</button>
                    <p class="link mb-6">0 Dates</p>
                    <div class="divider before:bg-opacity-100 after:bg-opacity-100"></div>
                    <textarea
                            class="textarea w-full textarea-bordered resize-none rounded-none border border-black mt-6"
                            placeholder="Description"/>
                </div>
            </div>
        </div>
        <button class="btn w-full rounded-none">Create</button>
    </div>
</template>

<script lang="ts" setup>
import MMTBasicTextInput from "~/components/orga/MMTBasicTextInput.vue";
import Searchbar from "~/components/search/searchbar.vue";

definePageMeta({
    title: 'Create',
    description: 'Create',

})
const placesArray = ref([])
const uploadImgArray = ref([])
// show the image
const upload = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
        uploadImgArray.value.push(reader.result)
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
</script>

<style scoped>
.rounded-none {
    border-radius: 0px !important;
}

::-webkit-date
</style>