<script setup lang="ts">

const show = ref(true);
const previewImage = ref<File | null>(null)
const raw = ref<File | null>(null)
const liveURL = ref<string | null>(null)
const uploadImage = (e) => {
    const image = e.target.files[0];
    raw.value = image;
    const reader = new FileReader();
    reader.readAsDataURL(image);


    reader.onload = e =>{
        previewImage.value = e.target.result;
        //@ts-ignore
        useFetch('http://localhost:8080/api/upload', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:{
                imageName: image.name,
                image: previewImage
            }
        }).then(res => {
            console.log(res.data._rawValue)
            liveURL.value = res.data._rawValue.publicUrl
        }).catch(err => {
            console.log(err)
        })
    }
}
</script>

<template>
        <div class="py-12 theme-mode dark:bg-black">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <input type="text" placeholder="Search" class="input w-full rounded-none" />
                <div class="text-center">
                    <img
                        class="w-auto"
                        src="/img/MMT_Final.png"
                        alt="MMT Final"
                    />
                    <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight md:text-7xl dark:text-white">
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
</template>
