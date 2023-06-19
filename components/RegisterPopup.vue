<template>
  <div class="popup-container">
    <div class="popup">
      <signup-form />
      <button class="closeBtn" @click="hide">
        <span class="close-icon">X</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
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

.popup {
    width: calc(100% - 40px); /* Anpassung: Popup-Fenster ist 20px breiter auf beiden Seiten */
    background-color: transparent;
    padding: 30px; /* Anpassung: Größerer Innenabstand */
}

.closeBtn {
    position: absolute;
    top: -50px; /* Anpassung: Button weiter oben positionieren */
    right: 150px; /* Anpassung: Button weiter rechts positionieren */
    background-color: transparent;
    border: none;
    color: #000;
    font-size: 28px; /* Anpassung: Größere Schriftgröße */
    cursor: pointer;
}

.close-icon {
    color: #fff;
    font-size: 24px;
    top: -50px; /* Anpassung: Button weiter oben positionieren */
    right: 150px; /* Anpassung: Button weiter rechts positionieren */
    color: #000;
    font-size: 28px;
}

.closeBtn:hover {
    color: #333;
}
</style>
