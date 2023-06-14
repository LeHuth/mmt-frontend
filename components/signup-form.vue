<template>
  <div class="form-container">
    <form class="form" @submit.prevent="signup">
      <div class="form-control">
        <label for="email">Email</label>
        <input id="email" v-model="email" placeholder="Enter email" required type="email" />
      </div>
      <div class="form-control">
        <label for="first-name">First Name</label>
        <input id="first-name" v-model="firstName" placeholder="Enter first name" required type="text" />
      </div>
      <div class="form-control">
        <label for="last-name">Last Name</label>
        <input id="last-name" v-model="lastName" placeholder="Enter last name" required type="text" />
      </div>
      <div class="form-control">
        <label for="password">Password</label>
        <input id="password" v-model="password" placeholder="Enter password" required type="password" />
      </div>
      <div class="form-control">
        <label for="password2">Confirm Password</label>
        <input id="password2" v-model="password2" placeholder="Confirm password" required type="password" />
      </div>
      <button class="btn" type="submit">Sign Up</button>
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

.form-control {
  margin-bottom: 20px;
}

label {
  font-size: 14px;
  font-weight: bold;
  color: #000;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #000;
  border-radius: 4px;
  background-color: transparent;
  color: #000;
}

.btn {
  background-color: #000;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.backend-message {
  margin-top: 10px;
  font-size: 14px;
  color: #333;
}
</style>
