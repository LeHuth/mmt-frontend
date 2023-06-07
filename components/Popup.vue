<template>
    <div v-if="show" class="popup-container">
      <div class="popup" :style="{ backgroundImage: `url(${image})` }">
        <div class="content">
          <div class="description-container">
            <p class="popup-description">{{ description }}</p>
          </div>
          <Button @click="alert('clikee')" />
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Button from './Button.vue'; // Import Button component

const props = defineProps({
  show: Boolean,
  image: String,
  imageAlt: String,
  description: String
});
</script>



<style scoped>
/* hier kommt dein CSS */

.popup-container {
    flex: 1;
    height: 100%;
    position: relative;
    background-color: rgba(0, 0, 0, 0);
}

.popup {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    background-position: center;
    background-repeat: no-repeat;

    background-size: 80%;
    padding: 0;
    overflow: auto;
}

.content {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding: 20px;
}

.description-container {
    background-color: #fff;
    padding: 10px;
    border-radius: 5px;
    max-width: 80%;
}

.popup-description {
    margin: 0;
}
</style>
