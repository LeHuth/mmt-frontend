<template>
    <div class="main-video">
        <div class="video-container">
            <video id="main-bg-video" loop autoplay muted>
                <source src="testVideo.mp4" type="video/mp4" />
            </video>
        </div>
        <div class="main-video-text">
            <h1 class="video-h1">MapMyTickets</h1>
            <div class="main-video-text-btm">Kaufen</div>
        </div>
        <div class="scroll__down">
            <span class="scroll__mouse">
                <span class="scroll__wheel"></span>
            </span>
        </div>
    </div>
</template>

<style>
.main-video {
    width: 100%;
    height: 100vh;
    min-height: auto;
}

.video-container {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
}

.video-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.6;
    z-index: 1;
}

#main-bg-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
}

.main-video-text {
    position: absolute;
    font-family: '1';
    text-transform: uppercase;
    z-index: 3;
    top: auto;
    bottom: 0;
    padding: 120px 40px 75px 6.6%;
    text-align: left;
    color: #fff;
}

.main-video-text-btm {
    font-family: '2';
    text-transform: uppercase;
    margin-top: 10px;
    display: inline-block;
    padding: 14px 34px;
    font-size: 16px;
    border: 2px solid #fd0202;
    border-radius: 4px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    text-align: center;
    transition: background 0.2s ease-in-out;
}

.main-video-text-btm:hover {
    background: #fd0202;
}

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
    -webkit-tap-highlight-color: rgba(0,0,0,0);
}

body {
    background-color: #30363f;
}

.scroll__down {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
}

.scroll__mouse {
    position: relative;
    display: inline-block;
    width: 34px;
    height: 54px;
    border: 2px solid #fff;
    border-radius: 20px;
}

.scroll__wheel {
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