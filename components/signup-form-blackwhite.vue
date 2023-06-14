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
      <button class="btn">Sign Up</button>
      <button class="close-button" @click="hide">
      Schließen
    </button>
      <p class="backend-message">{{ backend_message }}</p>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SignupForm',
  data() {
    return {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      password2: '',
      backend_message: '',
    };
  },
  methods: {
    signup() {
      // Registrierungsfunktion
    },
  },
};
</script>

<style scoped>
.form-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #000;
  padding: 20px;
  width: 400px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.close-button {
  margin-top: 20px;
  background-color: #000;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}

.close-button:hover {
  background-color: #333;
}

.form {
  background-color: #fff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}

.backend-message {
  font-size: 12px;
  color: #000;
}
</style>
