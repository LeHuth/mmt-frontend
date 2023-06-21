<template>
  <div class="stats rounded-none shadow border border-black p-6">
    <div class="stats-header">
      <h1>
        Upcomming Events
      </h1>

      <div class="overflow-x-auto  scroll-smooth">
        <table class="table table-pin-rows">
          <!-- head -->
          <thead fixed>
            <tr>
              <th />
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            <!-- row 1 -->
            <tr class="hover">
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
            </tr>
            <!-- row 2 -->
            <tr class="hover">
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
            </tr>
            <!-- row 3 -->
            <tr class="hover">
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
            </tr>
            <tr class="hover">
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
            </tr>
            <!-- row 2 -->
            <tr class="hover">
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
            </tr>
          </tbody>
        </table>
      </div>
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
