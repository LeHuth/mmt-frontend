<template>
    <div id="base" :class="'card-base card bg-base-100 shadow-xl'">
        <figure><img alt="Shoes"/></figure>
        <div class="card-body">
            <h2 class="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
defineComponent({
    name: "EventMapCard",
})

const props =defineProps({
    zoom: {
        type: Number,
    }
})

watch(() => props.zoom, (zoom) => {
    console.log(zoom)
    if(document){
        console.log('change')
        let elem = document.querySelector('.card-base')
        //console.log(elem.attributes)
        let style = elem.getAttribute('style')
        console.log(style)
        style = style.toString().split(';')[1]
        elem.setAttribute('style', `width: ${Math.floor(zoom) * 20}px; ` + style)
        //elem.attributes[0].value += `width: ${Math.floor(zoom) * 10}px`
    }
})

</script>

<style scoped>

</style>