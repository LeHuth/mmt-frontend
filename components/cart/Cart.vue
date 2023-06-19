<template>
  <div>
    <!-- Overlay für das Popup-Fenster -->
    <div v-if="showCartPopup" class="overlay">
      <div class="cart-popup">
        <!-- Hier wird der Inhalt des Warenkorb-Popup-Fensters platziert -->
        <div class="cart-popup-content">
          <h1 class="text-end h1-no-line-height">CART</h1>
          <div v-if="cartStore.getCart.length > 0">
            <CartItem
              v-for="item in cartStore.getCart"
              :key="item"
              :event="eventStore.getEventById(item)"
            ></CartItem>
            <h3>Total: {{ cartTotal }}</h3>
            <button
              v-if="authStore.isLoggedIn"
              @click="cartStore.checkout('')"
            >Checkout</button>
            <div v-else class="flex">
              <div>
                <h1 class="border-b-red-500">&#8612;</h1>
                <h1>&#8612;</h1>
              </div>
              <h1 class="semi-huge text-red-500 outline text-shadow outline-with-1px inline-block">LOGIN TO CHECKOUT</h1>
            </div>
          </div>
          <div v-else>
            <h1 class="semi-huge text-red-500 outline outline-with-1px rotate-90 spin-animation inline-block">EMPTY :[</h1>
          </div>
        </div>
        <!-- Schließen des Popup-Fensters -->
        <button class="close-button" @click="$emit('close')">Close</button>
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

const showCartPopup = ref(true); // Zustand für die Anzeige des Popup-Fensters
</script>

<style scoped>
/* Stile für das Overlay und das Popup-Fenster */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 1;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}

.cart-popup {
  width: 900px;
  height: 600px;
  background-color: white;
  padding: 120px;
  border-radius: 8px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  display: flex;
  flex-direction: column;

  /* Animation style */
  background-color: #f402a3;
  background-image: linear-gradient(19deg, #8fed01 0%, #b921ff02 100%);
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  box-shadow: 15px 15px 50px rgba(0,0,0,0.2);
  animation: morphing 10s infinite;
  right: 20px; /* Abstand vom rechten Rand */
  top: 20px; /* Abstand vom oberen Rand */
  left: auto; /* Entfernt die linke Ausrichtung */
}

.cart-popup-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.close-button {
  align-self: flex-end;
  margin-top: 10px;
  background-color: #f44336;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* Stile aus LoginPopup.vue */
.popup-container {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 600px; /* Neue Breite des Popups */
  height: 900px;
  align-items: center; /* Setzt das Element vertikal in der Mitte */
  z-index: 999;
}

.popup {
  background-color: white;
  padding: 60px;
  margin-bottom: 20px;
  margin-right: 20px; /* Abstand zum rechten Rand */
  width: 80%; /* Neue Breite des Popups */
  height: 70%;

  /* Animation style */
  background-color: #c401d6;
  background-image: linear-gradient(19deg, #21D4FD 0%, #b921ff02 100%);
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  box-shadow: 15px 15px 50px rgba(0,0,0,0.2);
  animation: morphing 10s infinite;
}

@keyframes morphing {
  0% {
    border-radius: 20% 80% 80% 20% / 20% 20% 80% 80%;
    /* ... andere Eigenschaften ... */
  }
  25% {
    border-radius: 70% 30% 90% 10% / 90% 60% 40% 10%;
    /* ... andere Eigenschaften ... */
  }
  50% {
    border-radius: 60% 40% 20% 80% / 60% 30% 70% 40%;
    /* ... andere Eigenschaften ... */
  }
  75% {
    border-radius: 40% 60% 70% 30% / 40% 70% 30% 60%;
    /* ... andere Eigenschaften ... */
  }
}
</style>
