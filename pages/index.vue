// pages/login.vue
<template>
    <div class="container">
        <h1>Anmelden</h1>
        <form>
            <div>
                <label for="email">E-Mail-Adresse:</label>
                <input type="email" id="email" required />
            </div>
            <div>
                <label for="password">Passwort:</label>
                <input type="password" id="password" required />
            </div>
            <button type="submit">Anmelden</button>
        </form>
    </div>
</template>

<script lang="ts"></script>

<style scoped>
/* Add your styles here */
</style>
