<template>
    <div class="login-container">
        <video autoplay muted loop class="video-background">
            <source src="/img/ff22.mp4" type="video/mp4" />
            Your browser does not support HTML5 video.
        </video>
        <div class="login-page">
            <img src="/img/wb.gif" alt="Left Image" class="left-image" />
            <form @submit.prevent="submitForm">
                <h2 class="login-title">Anmelden</h2>

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

                <button type="submit" class="btn-login">Anmelden</button>
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
                password: '',
            },
        };
    },
    methods: {
        async submitForm() {
            try {
                let response = await this.$auth.loginWith('local', {
                    data: this.form,
                });
                this.$router.push('/');
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>

<style scoped>
.login-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow: hidden;
}

.bg-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
}
.login-page {
    z-index: 1;
    width: 400px;
    padding: 40px;
    background: white;
    border-radius: 10px;
    box-shadow: 0px 14px 28px rgba(0, 0, 0, 0.1),
        0px 10px 10px rgba(0, 0, 0, 0.12);
    position: relative;
}

.left-image {
    position: flex;
    top: auto;
    left: auto;
    max-width: 300px;
}

.login-title {
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

.btn-login {
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

.btn-login:hover {
    background-color: #0056b3;
}
</style>
