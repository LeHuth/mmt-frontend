import { SecSection } from './.nuxt/components';
<!-- eslint-disable vue/html-self-closing -->
<template>
    <div id="app">
        <Header />
        <MainVideo />
        <SecSection />
    </div>
</template>

<script lang="ts"></script>

<style>
body::-webkit-scrollbar {
    width: 5px;
    display: none; /*ohne Anzeige*/
}

body::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

body::-webkit-scrollbar-thumb {
    background-color: #fd0202;
    outline: 1px solid rgb(0, 0, 0);
}

@font-face {
    font-family: '1';
    font-display: block;
    src: url('public/fonts/static/1.woff2');
}

@font-face {
    font-family: '2';
    font-display: block;
    src: url('public/fonts/static/2.woff2');
}

body {
    width: 100%;
    overflow-x: hidden;
    margin: 0;
    padding: 0;
    font-family: '1';
    color: #333;
    background: #333;
}
</style>
