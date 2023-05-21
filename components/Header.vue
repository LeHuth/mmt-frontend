<template>
    <div>
        <header class="navbar">
            <div class="logo">mmt_website</div>
            <div class="menu-btm">
                <div
                    class="hamburger hamburger--elastic"
                    :class="{'is-active': isMenuActive}"
                    @click="toggleMenu"
                >
                    <div class="hamburger-box">
                        <div class="hamburger-inner"></div>
                    </div>
                </div>
                <div v-if="isMenuActive" class="menu-popup">
                    <nuxt-link to="/">Home</nuxt-link>
                    <nuxt-link to="/login">Login</nuxt-link>
                    <nuxt-link to="/registrierung">Registrieren</nuxt-link>
                    <nuxt-link to="/shop">Shop</nuxt-link>
                    <!-- Add more links as needed -->
                </div>
            </div>
        </header>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isMenuActive: false,
        };
    },
    methods: {
        toggleMenu() {
            this.isMenuActive = !this.isMenuActive;
        },
    },
};
</script>

<style>
.menu-popup {
    position: absolute;
    top: 100%;
    right: 0;
    width: 200px;
    background: white;
    padding: 20px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
}
.menu-popup a {
    display: block;
    color: black;
    text-align: left;
    padding: 12px 16px;
    text-decoration: none;
}
.menu-popup a:hover {
    background-color: #f1f1f1;
}
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #000000;
    z-index: 10;
}

.logo {
    font-family: '2';
    font-size: 40px;
    text-transform: uppercase;
    font-weight: 700;
}

.menu-btm {
    padding-right: 100px;
}

.hamburger {
    padding: 15px 15px;
    display: inline-block;
    cursor: pointer;
    transition-property: opacity, filter;
    transition-duration: 0.15s;
    transition-timing-function: linear;
    font: inherit;
    color: inherit;
    text-transform: none;
    background-color: transparent;
    border: 0;
    margin: 0;
    overflow: visible;
}
.hamburger:hover {
    opacity: 0.7;
}
.hamburger.is-active:hover {
    opacity: 0.7;
}
.hamburger.is-active .hamburger-inner,
.hamburger.is-active .hamburger-inner::before,
.hamburger.is-active .hamburger-inner::after {
    background-color: #000000;
}

.hamburger-box {
    width: 40px;
    height: 24px;
    display: inline-block;
    position: relative;
}

.hamburger-inner {
    display: block;
    top: 50%;
    margin-top: -2px;
}
.hamburger-inner,
.hamburger-inner::before,
.hamburger-inner::after {
    width: 40px;
    height: 4px;
    background-color: #000000;
    border-radius: 4px;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;
}
.hamburger-inner::before,
.hamburger-inner::after {
    content: '';
    display: block;
}
.hamburger-inner::before {
    top: -10px;
}
.hamburger-inner::after {
    bottom: -10px;
}

.hamburger--elastic .hamburger-inner {
    top: 2px;
    transition-duration: 0.275s;
    transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.hamburger--elastic .hamburger-inner::before {
    top: 10px;
    transition: opacity 0.125s 0.275s ease;
}

.hamburger--elastic .hamburger-inner::after {
    top: 20px;
    transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.hamburger--elastic.is-active .hamburger-inner {
    transform: translate3d(0, 10px, 0) rotate(135deg);
    transition-delay: 0.075s;
}

.hamburger--elastic.is-active .hamburger-inner::before {
    transition-delay: 0s;
    opacity: 0;
}

.hamburger--elastic.is-active .hamburger-inner::after {
    transform: translate3d(0, -20px, 0) rotate(-270deg);
    transition-delay: 0.075s;
}
</style>
