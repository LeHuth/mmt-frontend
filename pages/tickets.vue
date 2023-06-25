<template>
  <div class="mt-6">
    <!--    <SearchBar :events="events" :results-are-hyper-links="true" :show-result-count="true" />-->
    <div class="flex justify-center gap-6">
      <div class="grid border-black gap-6" style="grid-template-columns: 480px 480px">
        <div
          v-for="event in events"
          :key="event._id"
          class="card-elem mb-[12px] border-solid max-w-[480px] border-black flex flex-col justify-between"
        >
          <nuxt-link :to="'/detail/'+event._id">
            <Card :event-data="event" class="border-b card-component border-black" />
          </nuxt-link>
        </div>
      </div>
      <div class="w-full max-w-[480px] pt-3 pl-3">
        <!--        <search-bar :events="events" :results-are-hyper-links="true" :show-result-count="false" />-->
        <div class="mb-12">
          <search-bar :events="events" :results-are-hyper-links="true" :show-result-count="false" />
        </div>
        <h4>Price Range:</h4>
        <div class="flex mt-6 mb-12">
          <span class="pr-3 self-center">000$</span>
          <div class="relative w-full h-[20px]">
            <input class="" max="100" min="0" type="range" value="20">
            <input class="absolute top-0 left-0" max="100" min="0" type="range" value="80">
          </div>
          <span class="pl-3 self-center">100$</span>
        </div>

        <button class="btn bg-black text-white hover:bg-white hover:border-black hover:text-black rounded-none w-full mb-12">
          Apply filter
        </button>

        <div>
          <h4>Categories:</h4>
          <a class="block mt-6">Konzert (3)</a>
          <a class="block mt-3">Museum (1)</a>
          <a class="block mt-3">Gallery (2)</a>
          <a class="block mt-3">Fetival (0)</a>
        </div>
        <div class="mt-12">
          <h4>Tags:</h4>
          <div class="flex flex-wrap mt-6">
            <a v-for="tag in tags" :key="tag._id" class="mr-3 mb-3 link">
              {{ tag.name }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

import { useEventsStore } from '~/store/events'
import SearchBar from '~/components/search/searchbar.vue'

definePageMeta({
  title: 'Tickets',
  description: 'Tickets'

})

const tags = ref([])
const fetchTags = async () => {
  const { data } = await useFetch('http://localhost:8080/tags/')
  tags.value = data._rawValue.tags
}
fetchTags()
const eventStore = useEventsStore()
eventStore.fetchEvents()
const events = eventStore.getEvents

</script>

<style scoped>
.card-elem {
    transition: translate 0.1s ease-in-out, border-bottom 0.1s ease-in-out, box-shadow-color 0.1s ease-in-out, transform 0.1s ease-in-out;
}

.card-elem:hover {
    transform: scale(1.01);
    margin-bottom: 0px;
}

.card-component:hover {
    border-bottom: 4px solid greenyellow;
    transition: border-bottom 0.1s ease-in-out;
}

#__nuxt:after {
    content: "";
    position: absolute;
    height: 100%;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background-image: url('~/assets/images/white.png');
    background-repeat: repeat;
    pointer-events: none;
    z-index: -1;
}

input[type=range] {
    height: 0px;
    -webkit-appearance: none;
    margin: 10px 0;
    width: 100%;
    background-color: transparent;
}

input[type=range]:focus {
    outline: none;
}

input[type=range]::-webkit-slider-runnable-track {
    width: 100%;
    height: 1px;
    cursor: pointer;
    pointer-events: none;
    animate: 0.2s;
    box-shadow: 0px 0px 0px #000000;
    background: #000000;
    border-radius: 0px;
    border: 0px solid #000000;
    z-index: 0;
}

input[type=range]::-webkit-slider-thumb {
    box-shadow: 0px 0px 0px #000000;
    border: 1px solid #000000;
    height: 10px;
    width: 10px;
    border-radius: 30px;
    background: #da3636;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -5px;
    z-index: 99;
}

input[type=range]:focus::-webkit-slider-runnable-track {
    background: #000000;
    pointer-events: none;
}

input[type=range]::-moz-range-track {
    width: 100%;
    height: 1px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 0px 0px 0px #000000;
    background: #000000;
    border-radius: 0px;
    border: 0px solid #000000;
    pointer-events: none;
}

input[type=range]::-moz-range-thumb {
    box-shadow: 0px 0px 0px #000000;
    border: 1px solid #000000;
    height: 10px;
    width: 10px;
    border-radius: 30px;
    background: #ffffff;
    cursor: pointer;
    position: absolute;
    z-index: 5;
}

input[type=range]::-ms-thumb {
    position: absolute;
    z-index: 5;
}

</style>
