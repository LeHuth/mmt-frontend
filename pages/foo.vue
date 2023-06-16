<template>
    <div>
        <input class="file-input file-input-bordered w-full max-w-xs" type="file" @change="upload"/>
        <div>
            <img v-for="img in uploadImgArray" :src="img"/>
        </div>
    </div>
</template>

<script lang="ts" setup>
definePageMeta({
    colorMode: 'light',
})
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

</script>

<style scoped>

</style>