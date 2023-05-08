<template>
    <div style="max-width: 1280px; margin: auto">
        <MMTNavbar/>
        <MMTLoginModal id="my-modal-6"/>
        <slot/>
    </div>
</template>
<script>
export default {
    name: "default"
}
</script>

<style scoped>

</style>