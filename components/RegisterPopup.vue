<template>
  <div class="popup-container">
    <div class="popup">
      <signup-form />
      <button class="btn" @click="hide">X</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useAuthStore } from '~/store/auth';

export default defineComponent({
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const hide = () => {
      emit('close', false);
    };

    return {
      hide,
    };
  },
});
</script>

<style scoped>
.popup-container {
  position: fixed;
  top: 300px;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}
/*
.popup {
  width: 80%;  Anpassung: Popup erstreckt sich über 60% der Bildschirmbreite
  background-color: #fff;
  padding: 30px;  Anpassung: Größerer Innenabstand
}
*/

.popup {
  width: calc(100% - 40px); /* Anpassung: Popup-Fenster ist 20px breiter auf beiden Seiten */
  background-color: transparent;
  padding: 30px; /* Anpassung: Größerer Innenabstand */
}

.btn {
  position: absolute;
  top: -50px; /* Anpassung: Button weiter oben positionieren */
  right: 150px; /* Anpassung: Button weiter rechts positionieren */
  background-color: transparent;
  border: none;
  color: #000;
  font-size: 28px; /* Anpassung: Größere Schriftgröße */
  cursor: pointer;
}

.btn:hover {
  color: #333;
}
</style>
