<script setup lang="ts">
import SiteMapGrid from '~~/components/elements/SiteMapGrid.vue';

const show = ref(true);
</script>

<template>
    <div class="">
        <div class="py-12 theme-mode dark:bg-black">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    class="mt-2 text-3xl leading-8 font-extrabold tracking-tight md:text-7xl dark:text-white"
                >
                    <input
                        type="search"
                        class="w-full px-3 py-2 text-sm text-gray-700 bg-white border-2 border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                        placeholder="Suche..."
                        @input="handleSearchInput"
                    />
                </div>
                <div class="text-center">
                    <img
                        class="w-auto"
                        src="/img/MMT_Final.png"
                        alt="MMT Final"
                    />
                    <p
                        class="mt-2 text-3xl leading-8 font-extrabold tracking-tight md:text-7xl dark:text-white"
                    >
                        Map
                        <span
                            class="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-400 hover:from-green-500 hover:to-teal-400"
                            >My Ticket</span
                        >
                    </p>
                    <video
                        class="mx-auto my-8"
                        src="/img/testVideo (2).mp4"
                        width="640"
                        height="360"
                        controls
                        autoplay
                        muted
                        loop
                    >
                        Ihr Browser unterstützt das Video-Tag nicht.
                    </video>
                </div>
            </div>
            <div class="flex justify-center my-20">
                <!-- <button @click="show = !show">Toggle Slide + Fade</button> -->
            </div>
        </div>
        <div class="flex justify-center">
            <site-map-grid />
        </div>
    </div>
</template>
