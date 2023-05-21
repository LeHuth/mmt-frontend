<template>
    <div class="section-info">
        <div class="section-info-left">
            <video autoplay muted loop class="video-background">
                <source src="/img/testVideo.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
            </video>
            <div class="section-info-left-content">
                <div class="section-info-left-header">Kunst</div>
                <div>
                    Es ist egtl.
                    <a href="#" class="line-wave">Kunst</a> - Quelle unbekannt.
                    <div>
                        Die ganze Website ist irgendwie ein bisschen barbarisch
                        aka:
                        <span class="text-brutal">Brutalism</span> - da braucht
                        man fast schon 2 Retalins
                    </div>
                </div>
                <div class="section-info-left-btm main-video-text-btm">
                    Info
                </div>
            </div>
        </div>
        <div class="section-info-right"></div>
    </div>
</template>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700,300italic,400italic);

body {
    cursor: url('https://assets.awwwards.com/awards/gallery/2017/10/supercursor.png')
            197 0,
        auto;
}
a:hover {
    cursor: url(data:image/png;base64,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)
            20 0,
        auto;
}

body {
    display: flex;
    align-items: center;
    margin: auto;
    justify-content: center;
    height: 100vh;
    font-size: 30px;
    font-weight: bold;
    text-transform: uppercase;
    color: rgb(255, 255, 255);
    text-align: center;
    line-height: 30px;
}

.line-wave {
    position: relative;
    display: inline-block;
    text-decoration: none;
    color: rgb(235, 5, 70);
    transition: all 0.3s ease-in-out;
}
.line-wave:after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0px;
    left: 0;
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 4'%3E%3Cstyle type='text/css'%3E.line-anime{animation:shift 0.3s linear infinite; transform:translateY(10px);}@keyframes shift {from {transform:translateX(0);}to {transform:translateX(-20px);}}%3C/style%3E%3Cpath fill='none' stroke='%23000000' stroke-width='1' class='line-anime' d='M0,3.5 c 5,0,5,-3,10,-3 s 5,3,10,3 c 5,0,5,-3,10,-3 s 5,3,10,3'/%3E%3C/svg%3E");
    height: 5px;
    width: 100%;
    transition: all 0.3s ease-in-out;
}

.text-brutal {
    display: inline-block;
    margin: auto;
    font-size: 45px;
    transform: rotate(5deg);
}

.section-info {
    display: flex;
    height: 100vh;
    color: rgb(255, 255, 255);
}

.section-info-left-content {
    margin: auto;
}
.section-info-left {
    position: relative;
    z-index: 1;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding-left: 120px;
}

.video-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
}

.section-info-left-content {
    z-index: 1;
}

.section-info-right {
    width: 50%;
}

.section-info-left-header {
    font-family: '2';
    text-transform: uppercase;
    font-size: 30px;
    line-height: 64px;
    letter-spacing: -0.02em;
    font-weight: 700;
}

.section-info-left-description {
    font-family: '1';
    margin-top: 15px;
    font-size: 24px;
    line-height: 36px;
    letter-spacing: -0.03em;
    font-weight: 400;
    color: #ffffff;
}

.section-info-right {
    background-image: url('/img/MMT_Final.png');
    background-color: #d252ba;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
}
</style>
