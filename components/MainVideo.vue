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
</style>
