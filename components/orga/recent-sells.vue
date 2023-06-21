<template>
  <div class="stats rounded-none shadow border border-black p-6">
    <div class="stats-header">
      <h1 class="">
        Recent Sells
      </h1>
      <div class="flex gap-12">
        <div>
          <p class="text-sm text-gray-500">
            This Week
          </p>
          <h4>
            90 Tickets
          </h4>
        </div>
        <div>
          <p class="text-sm text-gray-500">
            Last Week
          </p>
          <h4>
            70 Tickets
          </h4>
        </div>
      </div>

      <div class="overflow-x-auto min-w-[700px] max-h-60 scroll-smooth">
        <table class="table table-pin-rows">
          <!-- head -->
          <thead fixed>
            <tr>
              <th>Name</th>
              <th>Event</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <!-- row 1 -->
            <tr class="hover">
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
            <!-- row 2 -->
            <tr class="hover">
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
            <!-- row 3 -->
            <tr class="hover">
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
            <tr class="hover">
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
            <!-- row 2 -->
            <tr class="hover">
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
            <!-- row 3 -->
            <tr class="hover">
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
            <tr class="hover">
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
            <!-- row 2 -->
            <tr class="hover">
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
            <!-- row 3 -->
            <tr class="hover">
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineComponent({
  name: 'RecentSells'
})
</script>

<style scoped>

</style>
