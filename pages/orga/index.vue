<template>
  <div class="mt-3 border border-black">
    <div class="flex p-3 gap-6">
      <recent-sells />

      <total-tickets />
      <upcomming-events />
    </div>
    <div>
      <net-sales class="w-full mt-6" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import RecentSells from '~/components/orga/recent-sells.vue'
import TotalTickets from '~/components/orga/total-tickets.vue'
import UpcommingEvents from '~/pages/orga/upcomming-events.vue'
import NetSales from '~/pages/orga/net-sales.vue'

definePageMeta({
  title: 'Dashboard',
  layout: 'orga'
})
</script>

<style scoped>

</style>
