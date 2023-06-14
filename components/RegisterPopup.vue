<template>
  <div class="popup-container">
    <div class="popup">
      <h2>Registrierung</h2>
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


.popup {
  position: relative;
}

h2 {
  color: #000;
  font-size: 24px;
  margin-bottom: 20px;
}

.btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  color: #000;
  font-size: 24px;
  cursor: pointer;
}

.btn:hover {
  color: #333;
}
</style>
