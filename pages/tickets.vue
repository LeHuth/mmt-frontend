<template>
  <div class="mt-6">
    <!--    <SearchBar :events="events" :results-are-hyper-links="true" :show-result-count="true" />-->
    <div class="flex justify-center gap-6">
      <div class="grid border-black gap-3" style="grid-template-columns: 480px 480px">
        <div
          v-for="event in filteredEvents"
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
          <search-bar
            :emit-input="true"
            :events="events"
            :results-are-hyper-links="true"
            :show-result-count="false"
            @input="args => filterValue = args"
          />
        </div>
        <h4>Price Range:</h4>
        <div class="grid mt-6 mb-12" style="grid-template-columns: 40px auto 40px">
          <span class="pr-3 self-center">{{ priceRange[0] }}$</span>
          <client-only>
            <range-slider :max="maxPrice" :min="0" @range="args => priceRange = args" />
          </client-only>
          <span class="pl-3 self-center">{{ priceRange[1] }}$</span>
        </div>

        <button
          class="btn bg-black text-white hover:bg-white hover:border-black hover:text-black rounded-none w-full mb-12"
          @click="resetFilter"
        >
          reset filter
        </button>

        <div>
          <h4>Categories:</h4>
          <div class="flex flex-col">
            <a
              v-for="category in categories"
              :key="category._id"
              :class="{'font-bold': isInActiveCategory(category)}"
              class="mt-6 link inline max-w-fit"
              @click="setActiveCategory(category)"
            >
              {{ category.name }} ({{ category.amount }})</a>
          </div>
        </div>
        <div class="mt-12">
          <h4>Tags:</h4>
          <div class="flex flex-wrap mt-6">
            <a
              v-for="tag in tags"
              :key="tag._id"
              :class="{'font-bold': isInActiveTags(tag)}"
              class="mr-3 mb-3 link bold"
              @click="addTagToActive(tag._id)"
            >
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
import { useCartStore } from '~/store/cart'

definePageMeta({
  title: 'Tickets',
  description: 'Tickets'

})
const cartStore = useCartStore()
const config = useRuntimeConfig()
const tags = ref([])
const categories = ref([])
const activeCategory = ref('')
const activeTags = ref([])
const events = ref([])
const priceRange = ref([0, 100])
const filterValue = ref('')
const filteredEvents = ref([])
const fetchTags = async () => {
  const { data } = await useFetch(`${config.public.baseUrl}/tags/`)
  tags.value = data._rawValue.tags
}

const fetchCategories = async () => {
  const { data } = await useFetch(`${config.public.baseUrl}/categories/get/active/`)
  categories.value = data.value.value as Array<any>
}
fetchTags()
fetchCategories()
const eventStore = useEventsStore()
eventStore.fetchEvents()
events.value = eventStore.events
// get max and min price
const maxPrice = computed(() => {
  return Math.max(...events.value.map(event => event.price))
})

const minPrice = computed(() => {
  return Math.min(...events.value.map(event => event.price))
})
priceRange.value = [0, maxPrice.value]
filteredEvents.value = eventStore.events

const keywordFilter = (newfiltervalue) => {
  if (newfiltervalue === '') {
    return events.value
  }
  return events.value.filter((event) => {
    return event.name.toLowerCase().includes(newfiltervalue.toLowerCase())
  })
}

const tagFilter = () => {
  if (activeTags.value.length !== 0) {
    return filteredEvents.value.filter(event =>
      event.tags.some(tag => activeTags.value.includes(tag))
    )
  } else {
    console.log('no tags')
    return events.value
  }
}

const priceFilter = () => {
  return events.value.filter((event) => {
    return event.price >= priceRange.value[0] && event.price <= priceRange.value[1]
  })
}

const categoryFilter = () => {
  if (activeCategory.value === '') {
    return events.value
  } else {
    return events.value.filter(event => event.category === activeCategory.value._id)
  }
}

watch(filterValue, (newValue) => {
  filteredEvents.value = keywordFilter(newValue)
})

watch(activeTags, () => {
  filteredEvents.value = tagFilter()
})

watch(priceRange, () => {
  filteredEvents.value = priceFilter()
})

watch(activeCategory, () => {
  filteredEvents.value = categoryFilter()
})

watch(filteredEvents, () => {
  filteredEvents.value.sort((a, b) => levenshtein(b.name, filterValue.value) - levenshtein(a.name, filterValue.value))
})
const addTagToActive = (tag) => {
  if (activeTags.value.includes(tag)) {
    activeTags.value = activeTags.value.filter(activeTag => activeTag !== tag)
  } else {
    activeTags.value = [...activeTags.value, tag]
  }
}

const setActiveCategory = (category) => {
  if (isInActiveCategory(category)) {
    activeCategory.value = ''
  } else {
    activeCategory.value = category
  }
}
const favDialog = ref(null)
const openDialogForXTimne = () => {
  favDialog.value.showModal()
  /* setTimeout(() => {
                                                                                                                 }, 2000) */
}

const isInActiveCategory = (category) => {
  return activeCategory.value === category
}

const isInActiveTags = (tag) => {
  return activeTags.value.includes(tag._id)
}

function levenshtein (a, b) {
  if (a.length === 0) {
    return b.length
  }
  if (b.length === 0) {
    return a.length
  }

  const matrix = []

  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i]
  }

  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j
  }

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1]
      } else {
        matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1))
      }
    }
  }

  return matrix[b.length][a.length]
}

const resetFilter = () => {
  activeTags.value = []
  activeCategory.value = ''
  filterValue.value = ''
  filteredEvents.value = events.value
}
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

</style>
