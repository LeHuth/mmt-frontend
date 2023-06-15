 <template>
  <div>
    <div v-if="showCartPopup" class="overlay">
      <div class="cart-popup">
        <div class="cart-popup-content">

          <div v-if="cartStore.getCart.length > 0">
            <CartItem
              v-for="item in cartStore.getCart"
              :key="item"
              :event="eventStore.getEventById(item)"
            ></CartItem>
            <h3>Total: {{ cartTotal }}</h3>
            <button v-if="authStore.isLoggedIn" @click="cartStore.checkout('')">Checkout</button>
            <div v-else class="flex">
              <div>
                <h1>&#8612;</h1>
                <h1>&#8612;</h1>
              </div>
              <h1 class="inline-block">LOGIN TO CHECKOUT</h1>
            </div>
          </div>
          <div v-else>
            <p class="empty-message">Dein Warenkorb ist leer</p>
          </div>
        </div>
        <button class="close-button" @click="$emit('close')">X</button>
        <button class="bottom-button">Tickets finden</button> <!-- Neuer Button am unteren Rand -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from "~/store/cart";
import { useAuthStore } from "~/store/auth";
import CartItem from "~/components/cart/CartItem.vue";
import { computed, ref } from "vue";
import { useEventsStore } from "~/store/events";

const authStore = useAuthStore();
const cartStore = useCartStore();
const eventStore = useEventsStore();
eventStore.fetchEvents();

const cart = computed(() => {
  return cartStore.getCart.map((id) => {
    if (!eventStore.getEvents) return [];
    return eventStore.getEvents.find((event) => event._id === id);
  });
});

const cartTotal = computed(() => {
  if (!cart.value) return 0;
  let sum = 0;
  try {
    cartStore.getCart.forEach((id) => {
      sum += eventStore.getEventPrice(id);
    });
    return sum;
  } catch (e) {
    console.log(e);
    return sum;
  }
});

const showCartPopup = ref(true);
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 50%; /* Geändert auf 50% */
  transform: translateX(-30%); /* Hinzugefügt */
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cart-popup {
  top: 100px;
  width: 850px;
  height: 600px;
  background-color: white;
  padding: 20px;
  border-radius: 4px;
  //box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  display: flex;
  flex-direction: column;
}

.cart-popup-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.close-button {
  position: absolute;
  top: -20px; /* Anpassung: Button weiter oben positionieren */
  right: -20px; /* Anpassung: Button weiter rechts positionieren */
  background-color: transparent;
  border: none;
  color: #000;
  font-size: 28px; /* Anpassung: Größere Schriftgröße */
  cursor: pointer;
}

.empty-message {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
}
.bottom-button {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 20px;
  background-color: #fff;
  color: black;
  border: solid #000 1px;
  border-radius: 4px;
  cursor: pointer;
  width: 400px;
}

/* Add any additional styling you require */
</style>

