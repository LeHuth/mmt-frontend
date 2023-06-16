<template>
    <div class="join">
        <label class="join-item self-center py-3  text-center h-12 rounded-none w-20 bg-gray-300">
            <span class="label-text">{{props.title}}</span>
        </label>
        <input class="input join-item rounded-none input-bordered w-full" placeholder="Type here" type="text"/>
    </div>
</template>

<script lang="ts" setup>
defineComponent({
    name: 'MMTBasicTextInput',
    props: {
        title: {
            type: String,
            required: true
        },
    }
})

const props = defineProps({
    title: {
        type: String,
        required: true
    },
})
</script>

<style scoped>

</style>