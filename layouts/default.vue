<template>
    <div style="max-width: 1280px; margin: auto">
        <Navbar/>
        <slot/>
        <TheFooter/>
    </div>
</template>
<script>
import Navbar from "~/components/layout/navbar.vue";
import TheFooter from "~~/components/layout/TheFooter.vue";
export default {
    name: "default"
}
</script>

<style scoped>

</style>