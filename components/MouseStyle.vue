<template>
<div class="scroll__down">
    <span class="scroll__mouse">
        <span class="scroll__wheel"></span>
    </span>
</div>
</template>

<style>
@keyframes scrollDown {
    0% {
        top: 14px;
        opacity: 0;
    }

    15% {
        top: 14px;
        opacity: 1;
    }

    30% {
        top: 14px;
        opacity: 1;
    }

    45% {
        top: 34px;
        opacity: 1;
    }

    100% {
        top: 34px;
        opacity: 0;
    }
}

* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

body {
    background-color: #30363f;
}

.scroll_down {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
}

.scroll_mouse {
    position: relative;
    display: inline-block;
    width: 34px;
    height: 54px;
    border: 2px solid #fff;
    border-radius: 20px;
}

.scroll_wheel {
    position: absolute;
    top: 14px;
    left: 13px;
    width: 4px;
    height: 4px;
    background-color: #fff;
    border-radius: 50%;
    animation: scrollDown 2.5s infinite;
}

</style>
