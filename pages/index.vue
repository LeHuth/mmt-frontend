<template>
    <div>

        <!--<h1>Index</h1>
        <input @change="uploadImage" type="file">
        <img height="200" :src="previewImage">
        <img height="200" :src="liveURL" >
        <div class="p-4">
            <button class="btn">Hello daisyUI</button>
        </div>-->
    </div>
</template>

<script setup lang="ts">

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

<style scoped>

</style>