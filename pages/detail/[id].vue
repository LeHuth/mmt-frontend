<template>
    <div class="max-w-[1475px] mr-auto ml-auto mt-6">
        <div class="grid grid-cols-2 gap-6 "
             style="grid-template-columns: 960px 480px;">
            <div class="grid gap-3" style="grid-template-columns: 708px 228px">
                <img :src="event.images[0]" alt="prodimage" class="w-full"/>
                <div>
                    <nuxt-img :src="event.images[1]" class="mb-3" format="webp" quality="10"/>
                    <nuxt-img :src="event.images[2]" class="mb-3" format="webp" quality="10"/>
                    <nuxt-img :src="event.images[1]" format="webp" quality="10"/>
                </div>
            </div>
            <div>
                <div class="max-w-2xl ml-auto mr-auto">
                    <div class="text-left mb-12">
                        <h2 class="mb-3">{{ event.name }}</h2>
                        <p class="font-size-28 mb-12">{{ event.price }}$</p>
                        <p class="">{{ event.quip }}</p>
                    </div>
                    <!--                <div class="divider before:bg-opacity-100 after:bg-opacity-100"></div>-->
                    <div>
                        <!--                    <h6 class="mb-6">Date</h6>-->
                        <select class="select border-black select-bordered w-full max-w-full rounded-none mb-6">
                            <option disabled selected>Select event date</option>
                            <option v-for="happenig in event.happenings">{{ formatDate(happenig.date) }} --
                                {{ happenig.time }} Uhr
                            </option>
                        </select>
                        <div class="flex gap-3 justify-between" style="flex-wrap: nowrap;">
                            <button
                                    class="btn bg-black text-white hover:bg-white hover:border-black hover:text-black rounded-none w-[70%] mb-3"
                                    @click="addToCart">ADD TO CART
                            </button>
                            <button
                                    class="btn bg-black text-white hover:bg-white hover:border-black hover:text-black rounded-none w-[132px] mb-3"
                                    @click="addToCart">Wishlist
                            </button>
                        </div>


                        <div class="border border-black h-12 flex justify-between p-2">
                            <button :disabled="amount < 2" class="btn btn-sm rounded-none" @click="amount--">-</button>
                            <p>{{ amount }}</p>
                            <button :disabled="amount > 4" class="btn btn-sm rounded-none" @click="amount++">+</button>
                        </div>
                        <p class="text-center mt-10 small">You can pay securely with Credit Card or Paypal.</p>


                    </div>
                </div>
            </div>
        </div>
        <div>
            <div class="flex justify-between gap-6 max-w-[708px] w-full mt-24 mb-6">
                <h4
                        :class="{'border-b border-black': showDescription}"
                        @click="toggleVisibility('description')">
                    Description
                </h4>
                <h4
                        :class="{'border-b border-black': showAdditionalInfo}"
                        @click="toggleVisibility('additionalInfo')">
                    Additional Info
                </h4>
                <h4
                        :class="{'border-b border-black': showReviews}"
                        @click="toggleVisibility('reviews')">
                    Reviews
                </h4>
            </div>
            <transition-expand>
                <p v-if="showDescription" class="text-justify  font-thin max-w-[960px] pr-3 pb-3 border-b border-black">
                    {{
                    event.description
                    }}</p>
            </transition-expand>
            <transition-expand>
                <article v-if="showAdditionalInfo" class="max-w-[960px] pr-3 pb-3 border-b border-black">
                    <section>
                        <h5 class="mb-1">Supporting Artists with Every Purchase at MapMyTickets</h5>
                        <p class="mb-3">At MapMyTickets, we believe in championing the artists who create
                            the
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
                    </section>
                    <section>
                        <h5 class="mb-1">Secure Payment</h5>
                        <p class="mb-3">At MapMyTicktes, we prioritize your online security and privacy.
                            We've
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
                    </section>
                    <section>
                        <h5 class="mb-1">Free Shipping, No Returns</h5>
                        <p class="">At MapMyTickets, we're not just committed to providing you with an
                            easy and
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
                    </section>
                </article>
            </transition-expand>
            <transition-expand>
                <div v-if="showReviews">
                    <review-list :event_id="event._id" class="mb-12"/>
                    <add-review v-if="isAuthorized" :event_id="event._id"/>
                </div>

            </transition-expand>
            <related-events :events="relatedEvents" class="mt-24"/>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {useEventsStore} from "~/store/events";
import {useCartStore} from "~/store/cart";
import RelatedEvents from "~/components/detail/RelatedEvents.vue";
import AddReview from "~/components/review/AddReview.vue";
import {useAuthStore} from "~/store/auth";

const EventStore = useEventsStore()
const CartStore = useCartStore()
const authStore = useAuthStore()
const amount = ref(1)
const route = useRoute()
const relatedEvents = ref([])

const showDescription = ref(true)
const showAdditionalInfo = ref(false)
const showReviews = ref(false)
const showRelatedEvents = ref(false)
const isAuthorized = ref(false)

isAuthorized.value = await authStore.verifyToken()

const setAllFalse = () => {
    showDescription.value = false;
    showAdditionalInfo.value = false;
    showReviews.value = false;
    showRelatedEvents.value = false;
}

// create a function to toggle visibility
const toggleVisibility = (section) => {
    setAllFalse();
    switch (section) {
        case 'description':
            showDescription.value = true;
            break;
        case 'additionalInfo':
            showAdditionalInfo.value = true;
            break;
        case 'reviews':
            showReviews.value = true;
            break;
        case 'relatedEvents':
            showRelatedEvents.value = true;
            break;
        default:
            console.error(`Invalid section: ${section}`);
    }
}

await EventStore.fetchEvent(<string>route.params.id)

const event = computed(() => EventStore.event)
await EventStore.fetchEvents()
relatedEvents.value = EventStore.events

const formatDate = (isodate: string) => {
    const [year, month, day] = isodate.split('-')
    return `${day.substring(0, 2)}.${month}.${year}`
}

const addToCart = () => {
    CartStore.addToCart(event.value._id, true, amount.value, event.value.price)
    amount.value = 1
}
</script>

<style scoped>

</style>