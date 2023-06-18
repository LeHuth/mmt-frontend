<template>
    <div class="grid grid-cols-2 border border-black p-20">
        <div>
            <img :src="event.images[0]" alt="prodimage" class="pr-10 w-full"/>
        </div>
        <div>
            <div class="max-w-2xl ml-auto mr-auto">
                <div class="text-center">
                    <h2>{{ event.name }}</h2>
                    <h3>{{ event.price }}$</h3>
                    <br>
                    <h5>{{ event.quip }}</h5>
                    <br>
                </div>
                <div class="divider before:bg-opacity-100 after:bg-opacity-100"></div>
                <div>
                    <h6 class="mb-6">Date</h6>
                    <select class="select  select-bordered w-full max-w-full rounded-none">
                        <option disabled selected>Select event date</option>
                        <option v-for="happenig in event.happenings">{{ formatDate(happenig.date) }} --
                            {{ happenig.time }} Uhr
                        </option>
                    </select>

                    <button class="btn rounded-none w-full mt-10 mb-3">ADD TO CART</button>
                    <div class="border border-black h-12 flex justify-between p-2">
                        <button :disabled="amount < 2" class="btn btn-sm rounded-none" @click="amount--">-</button>
                        <p>{{ amount }}</p>
                        <button :disabled="amount > 4" class="btn btn-sm rounded-none" @click="amount++">+</button>
                    </div>
                    <p class="text-center mt-10 small">You can pay securely with Credit Card or Paypal.</p>

                    <div>
                        <h6 class="mb-6 mt-10">Description</h6>
                        <p class="text-justify mb-12 font-thin">{{ event.description }}</p>
                        <div class="join join-vertical w-full">
                            <div class="collapse collapse-arrow join-item border border-base-300">
                                <input checked="checked" name="my-accordion-4" type="radio"/>
                                <div class="collapse-title text-xl font-medium">
                                    Supporting Artists with Every Purchase at MapMyTickets
                                </div>
                                <div class="collapse-content">
                                    <p>At MapMyTickets, we believe in championing the artists who create the
                                        performances
                                        you love. As a testament to our commitment, we ensure that a substantial portion
                                        of
                                        each ticket sold goes directly to the artist.

                                        Our platform operates on a minimal commission basis, meaning we take the
                                        smallest
                                        cut possible from your ticket purchase. This approach guarantees that the
                                        majority
                                        of the revenue generated from ticket sales benefits the artists, supporting them
                                        in
                                        their creative endeavours and ensuring they can continue to deliver the
                                        performances
                                        that inspire, entertain, and bring joy.

                                        Choosing [Your Website Name] means not only gaining access to your favorite
                                        events
                                        but also directly contributing to the livelihood of artists and creators. Every
                                        ticket you purchase is a direct investment into the arts community.

                                        We're proud to serve as the bridge between you and the artists you love. Thank
                                        you
                                        for joining us in this journey, supporting and uplifting the world of performing
                                        arts.</p>
                                </div>
                            </div>
                            <div class="collapse collapse-arrow join-item border border-base-300">
                                <input name="my-accordion-4" type="radio"/>
                                <div class="collapse-title text-xl font-medium">
                                    Secure Payment
                                </div>
                                <div class="collapse-content">
                                    <p>At MapMyTicktes, we prioritize your online security and privacy. We've
                                        implemented
                                        robust measures to ensure safe and hassle-free transactions.

                                        For credit card payments, we utilize Secure Socket Layer (SSL) technology, an
                                        encryption standard for safe internet transmission. This means your credit card
                                        information is scrambled during the transaction, preventing unauthorized access.
                                        Post-transaction, your credit card details are not stored in our systems.

                                        Our payment processing is powered by Stripe, a leading global payments platform
                                        trusted by millions. Stripe combines technical and legal precautions with
                                        advanced
                                        machine learning algorithms, ensuring your payment is safe and secure.

                                        If you opt for PayPal, you'll be redirected to their site, where you can log
                                        into
                                        your existing account or create a new one. Your financial information is handled
                                        solely by PayPal, providing an additional layer of security.

                                        Your trust and security are our top priority. For any queries about our security
                                        measures, please contact our customer service team.</p>
                                </div>
                            </div>
                            <div class="collapse collapse-arrow join-item border border-base-300">
                                <input name="my-accordion-4" type="radio"/>
                                <div class="collapse-title text-xl font-medium">
                                    Free Shipping, No Returns
                                </div>
                                <div class="collapse-content">
                                    <p>At MapMyTickets, we're not just committed to providing you with an easy and
                                        secure
                                        booking experience, but also ensuring you receive your tickets without any
                                        additional costs. That's why we're proud to offer Free Shipping on all orders.

                                        Once your booking is confirmed, your event tickets will be delivered to your
                                        specified address completely free of charge, leaving you more to spend on
                                        enjoying
                                        the event itself!

                                        As we are a platform that sells event tickets, please note that all sales are
                                        final.
                                        Due to the nature of our business and in accordance with our policies, we are
                                        unable
                                        to process returns or provide refunds once a ticket has been purchased.

                                        This is because when you buy a ticket, we reserve a specific seat or admission
                                        for
                                        you which can't be resold or returned to the event organizer. We strongly
                                        encourage
                                        you to review all the details of the event before making a purchase.

                                        We appreciate your understanding and cooperation. Should you have any questions
                                        or
                                        concerns, feel free to reach out to our customer service team.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {useEventsStore} from "~/store/events";

const EventStore = useEventsStore()
const amount = ref(1)
const route = useRoute()

await EventStore.fetchEvent(<string>route.params.id)

const event = computed(() => EventStore.event)

const formatDate = (isodate: string) => {
    const [year, month, day] = isodate.split('-')
    return `${day.substring(0, 2)}.${month}.${year}`
}
</script>

<style scoped>

</style>