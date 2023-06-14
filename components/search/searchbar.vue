<template>
    <div class="sticky grid z-50 top-0 bg-white">
        <div class="flex z-30 justify-between p-2 bg-white border-black border-y border-x">
            <h5 class="text-center self-center">{{ props.events.length }} Ergebnisse</h5>
            <input @input="runFilter" v-model="searchQuery" @focus="showSearchResultSection=true" @blur="showSearchResultSection=false" class="input border-black w-full max-w-xs rounded-none" placeholder="Search" type="text"/>
            <button class="btn rounded-none">Filter</button>
        </div>
        <search-result-section :events="results.value" id="search-result-container" :class="(showSearchResultSection ?  'visible translate-y-16' : 'invisible') + ' absolute z-10' "/>
    </div>

</template>

<script lang="ts" setup>
import SearchResultSection from "~/components/search/search-result-section.vue";

defineComponent({
    name: "SearchBar",
    props: {
        events: Array
    }
})

const props = defineProps({
    events: Array
})
const results = ref([])
const searchQuery = ref('')
const showSearchResultSection = ref(false)

const runFilter = async () => {
    if(searchQuery.value == '') return results.value = []
    const {data} = await useFetch('http://localhost:8080/events/filter',{
        query: {
            title: searchQuery.value
        }
    })
    results.value = data
}
</script>

<style scoped>
#search-result-container {
    transition: visibility 0.2s ease-in-out 0.2s, transform 0.2s ease-in-out 0.2s;
}
</style>