<template>
    <div class="container mx-auto">
        <div class="flex flex-col items-center justify-center">
            <h1 class="text-4xl font-bold">Success!</h1>
            <p class="text-xl">Thank you for your purchase!</p>
            <button class="btn" @click="navigateTo('/')">Return to Home</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "success"
}
</script>

<style scoped>

</style>