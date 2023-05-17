<template>
    <div class="section-info">
        <div class="section-info-left">
            <div class="section-info-left-header">Karte</div>
            <div class="section-info-left-description">
                Die Plattform bietet auch eine Ticketing-App, <br />
                ihre Tickets auf dem Smartphone speichern und <br />
                an der mit derNutzer Veranstaltung teilnehmen können,<br />
                ohne ausgedruckte Tickets vorzeigen zu müssen. <br />
                Das neu gestaltete Design der Navigation <br />
                fördert neue Arten der Interaktion zwischen<br />
                Veranstaltern und Besuchern.<br />
            </div>
            <div class="section-info-left-btm main-video-text-btm">Info</div>
        </div>
        <div class="section-info-right"></div>
    </div>
</template>

<style>
.section-info {
    display: flex;
    height: 100vh;
    color: rgb(0, 0, 0);
}

.section-info-left {
    position: relative;
    z-index: 1;
    width: 50%;
    display: flex;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding-left: 120px;
    background-image: url('/img/Berlin_Umriss-transformed.jpeg');
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
    color: #040000;
}

.section-info-right {
    background-image: url('/img/MMT_Final.png');
    background-color: #d252ba;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
}
</style>
