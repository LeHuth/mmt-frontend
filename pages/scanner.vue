<template>
  <client-only>
    <div class="qr-container">
      <qr-stream />
    </div>
  </client-only>
</template>

<script>
export default {
  name: "Scanner",
};
</script>

<style scoped>
.qr-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100vw;
  overflow: hidden;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
