<template>
  <div class="form-container">
    <form class="form" @submit.prevent="signup">
      <div class="form-control">
        <h1 class="popup-label-text" style="margin-bottom: -9px">Email</h1>
        <input id="email" v-model="email" placeholder="Enter email" required type="email" />
      </div>
      <div class="form-control">
        <h1 class="popup-label-text" style="margin-bottom: -9px">First Name</h1>
        <input id="first-name" v-model="firstName" placeholder="Enter first name" required type="text" />
      </div>
      <div class="form-control">
        <h1 class="popup-label-text" style="margin-bottom: -9px">Last Name</h1>
        <input id="last-name" v-model="lastName" placeholder="Enter last name" required type="text" />
      </div>
      <div class="form-control">
        <h1 class="popup-label-text" style="margin-bottom: -9px">Password</h1>
        <input id="password" v-model="password" placeholder="Enter password" required type="password" />
      </div>
      <div class="form-control">
        <h1 class="popup-label-text" style="margin-bottom: -9px">Confirm Password</h1>
        <input id="password2" v-model="password2" placeholder="Confirm password" required type="password" />
      </div>
      <div class="form-control center">
        <button class="btn" type="submit">Sign Up</button>
      </div>
      <p class="backend-message">{{ backend_message }}</p>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useAuthStore } from '~/store/auth';

export default defineComponent({
  name: 'SignupForm',
  setup() {
    const email = ref('');
    const password = ref('');
    const firstName = ref('');
    const lastName = ref('');
    const password2 = ref('');
    const backend_message = ref('');

    const authStore = useAuthStore();

    const checkIfPasswordsMatch = () => {
      return password.value === password2.value;
    };

    const signup = () => {
      if (!checkIfPasswordsMatch()) {
        console.log('Passwords do not match');
        return;
      }

      authStore
        .signup(email.value, password.value, firstName.value, lastName.value)
        .then(res => {
          console.log(res);
          backend_message.value = res._rawValue.msg;
        })
        .catch(err => {
          console.log(err);
        });
    };

    return {
      email,
      password,
      firstName,
      lastName,
      password2,
      backend_message,
      signup,
    };
  },
});
</script>

<style scoped>

.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.form {
  background-color: #fff; /* bestimmt tatsächlich die backround color */
  padding: 20px;
  border-radius: 8px;
  width: calc(400px + 400px); /* Anpassung: Popup-Fenster ist 20px breiter auf beiden Seiten */
}

label {
  font-size: 16px; /* Anpassung: Größere Schriftgröße */
  font-weight: bold;
  color: #000;
}

input {
  width: 100%;
  padding: 12px; /* Anpassung: Größerer Innenabstand */
  border: 1px solid #000;
  border-radius: 4px;
  background-color: transparent;
  color: #000;
  width: 400px; /* Anpassung: Breiteres Eingabefeld */
}

.center {
  display: flex;
  justify-content: center;
}

.btn {
  background-color: #000;
  color: #fff;
  padding: 12px 24px; /* Anpassung: Größerer Innenabstand */
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 18px; /* Anpassung: Größere Schriftgröße */
  margin-top: 10px;
}

.backend-message {
  margin-top: 15px; /* Anpassung: Größerer Abstand zur oberen Kante */
  font-size: 16px; /* Anpassung: Größere Schriftgröße */
  color: #333;
}

.popup-label-text {
    font-size: 16px;
    font-weight: bold;
    color: #000;
  margin-bottom: 1px; /* Anpassung: Verringern des Abstands nach unten */
}
  
</style>
