<template>
    <div class="register-container">
        <div class="hero-banner">
            <marquee scrollamount="5" truespeed="true" scrolldelay="40">
                JOIN US AS FAST AS YOU CAN, OR OUR DEVELOPERS WILL CRY JOIN US
                AS FAST AS YOU CAN, OR OUR DEVELOPERS WILL CRY JOIN US AS FAST
                AS YOU CAN, OR OUR DEVELOPERS WILL CRY JOIN US AS FAST AS YOU
                CAN, OR OUR DEVELOPERS WILL CRY
            </marquee>
            <div class="hero-banner-wrapper">
                <div v-for="i in 10" :key="i" class="hero-banner-title">
                    JOIN
                </div>
            </div>
            <div class="hero-banner-media">
                <div class="hero-btn">
                    <span>SIGN</span>
                </div>
                <div
                    class="hero-banner-media--img"
                    style="
                        background-image: url('https://images.unsplash.com/photo-1502055319327-d21e69ac431f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ad9b147df4b9809454c8d60fbb48084c&auto=format&fit=crop&w=934&q=80');
                    "
                ></div>
                <div
                    class="hero-banner-media--img"
                    style="
                        background-image: url('https://images.unsplash.com/photo-1502055319327-d21e69ac431f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ad9b147df4b9809454c8d60fbb48084c&auto=format&fit=crop&w=934&q=80');
                    "
                ></div>
            </div>
        </div>
        <div class="register-page">
            <form @submit.prevent="submitForm">
                <h2 class="register-title">Registrieren</h2>

                <div class="form-group">
                    <label for="username">Benutzername</label>
                    <input
                        id="username"
                        v-model="form.username"
                        type="text"
                        required
                        class="form-control"
                        placeholder="Benutzername"
                    />
                </div>

                <div class="form-group">
                    <label for="email">E-Mail</label>
                    <input
                        id="email"
                        v-model="form.email"
                        type="email"
                        required
                        class="form-control"
                        placeholder="E-Mail"
                    />
                </div>

                <div class="form-group">
                    <label for="password">Passwort</label>
                    <input
                        id="password"
                        v-model="form.password"
                        type="password"
                        required
                        class="form-control"
                        placeholder="Passwort"
                    />
                </div>

                <button type="submit" class="btn-register">Registrieren</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                username: '',
                email: '',
                password: '',
            },
        };
    },
    methods: {
        async submitForm() {
            try {
                let response = await this.$auth.register({
                    data: this.form,
                });
                this.$router.push('/login');
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>

<style scoped>
.register-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    background-image: url('https://images.unsplash.com/photo-1502055319327-d21e69ac431f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ad9b147df4b9809454c8d60fbb48084c&auto=format&fit=crop&w=934&q=80'); /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: auto; /* Resize the background image to cover the entire container */
}

.register-page {
    display: center;
    width: 400px;
    padding: 40px;
    background: white;
    border-radius: 10px;
    box-shadow: 0px 14px 28px rgba(0, 0, 0, 0.1),
        0px 10px 10px rgba(0, 0, 0, 0.12);
}

.register-title {
    margin-bottom: 40px;
    text-align: center;
    color: #333;
    font-size: 24px;
}

.form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
}

.form-group label {
    font-size: 14px;
    color: #555;
    margin-bottom: 5px;
}

.form-control {
    padding: 10px 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
    color: #333;
}

.btn-register {
    padding: 10px 0;
    font-size: 16px;
    color: white;
    background: #007bff;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    text-align: center;
    margin-top: 20px;
}

.btn-register:hover {
    background-color: #0056b3;
}
</style>
