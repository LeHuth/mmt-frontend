<template>
  <div class="stats rounded-none shadow border border-black p-6">
    <div class="radial-progress stat-value" style="--value:100; --size:12rem; --thickness: 5px;">
      <div class="text-center">
        <h3>70</h3>
        <p>Sold Tickets</p>
      </div>
    </div>
    <div class="stat-desc border-none flex">
      <p class="mt-auto">
        Total Tickets: 140
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineComponent({
  name: 'TotalTickets'
})
</script>

<style scoped>

</style>
