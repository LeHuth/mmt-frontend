<template>
    <div class="grid grid-cols-2 border border-black p-20">
        <div>
            <img class="pr-10 w-full" src="~/public/tickets/peter-fox-tickets-poster.jpg" alt="prodimage"/>
        </div>
        <div>
            <div class="max-w-2xl ml-auto mr-auto">
                <div class="text-center">
                    <h2>Event Title</h2>
                    <h3>Event Price</h3>
                    <br>
                    <h5>Short Event Quip</h5>
                    <br>
                </div>
                <div class="divider before:bg-opacity-100 after:bg-opacity-100"></div>
                <div>
                    <h6 class="mb-6">Date</h6>
                    <select class="select  select-bordered w-full max-w-full rounded-none">
                        <option disabled selected>Select event date</option>
                        <option>28.06.2023 -- Berlin</option>
                        <option>30.06.2023 -- Hamburg</option>
                        <option>03.07.2023 -- Aachen</option>
                        <option>06.07.2023 -- Freiburg</option>
                    </select>

                    <button class="btn rounded-none w-full mt-10 mb-3">ADD TO CART</button>
                    <div class="border border-black h-12 flex justify-between p-2">
                      <button @click="amount--" class="btn btn-sm rounded-none">-</button>
                       <p>{{amount}}</p>
                      <button @click="amount++" class="btn btn-sm rounded-none">+</button>
                    </div>
                </div>

            </div>


        </div>
    </div>
</template>

<script lang="ts" setup>

const amount = ref(1)
</script>

<style scoped>

</style>