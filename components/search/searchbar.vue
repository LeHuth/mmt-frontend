<template>
    <div class="sticky grid z-50 top-0 bg-white">
        <div :class="'flex z-30 justify-between bg-white ' + (isBordered ? 'p-2 border-black border-y border-x' : '')" >
            <h5 v-if="showResultCount" class="text-center self-center">{{ props.events.length }} Ergebnisse</h5>
            <input @input="runFilter" v-model="searchQuery" @focus="showSearchResultSection=true" @blur="showSearchResultSection=false" class="input border-black w-full rounded-none" placeholder="Search" type="text"/>
            <button v-if="showFilter" class="btn rounded-none">Filter</button>
        </div>
        <search-result-section :events="results.value" id="search-result-container" :class="(showSearchResultSection ?  resultSectionOffset : 'invisible') + ' absolute z-10' "/>
    </div>

</template>

<script lang="ts" setup>
import SearchResultSection from "~/components/search/search-result-section.vue";

defineComponent({
    name: "SearchBar",
    props: {
        events: Array,
        showFilter: {
            type: Boolean,
            default: false
        },
        showResultCount: {
            type: Boolean,
            default: false
        },
        isBordered: {
            type: Boolean,
            default: true
        }
    }
})

const props = defineProps({
    events: Array,
    showFilter: {
        type: Boolean,
        default: false
    },
    showResultCount: {
        type: Boolean,
        default: false
    },
    isBordered: {
        type: Boolean,
        default: true
    }
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

const resultSectionOffset = computed(()=> {
    return props.isBordered ? 'translate-y-16' : 'translate-y-12'
})
</script>

<style scoped>
#search-result-container {
    transition: visibility 0.2s ease-in-out 0.2s, transform 0.2s ease-in-out 0.2s;
}
</style>