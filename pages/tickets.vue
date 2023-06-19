<template>
  <div>
    <div class="content-all">
      <div class="content-carrousel">
        <figure v-for="event in events.slice(0,9)">
          <Popup
            v-if="true"
            :description="event.title"
            :event_id="event._id"
            :image="event.image == 'test-image-url' ? 'https://picsum.photos/200' : event.image"
            :show="true"
            image-alt="Popup Image"
          />
        </figure><!--
                <figure><img src="apache-sommer-tickets-poster.jpg"></figure>
                <figure><img src="coldplay-tickets-poster-ta-vage.jpg"></figure>
                <figure><img src="cro-tickets-poster.jpg"></figure>
                <figure><img src="nina-chuba-tickets-poster.jpg"></figure>
                <figure><img src="peter-fox-tickets-poster.jpg"></figure>
                <figure><img src="tanz-der-vampire-25j-tickets-poster.jpg"></figure>
                <figure><img src="taylor-swift-tickets-poster-vager-ta.jpg"></figure>
                <figure><img src="the-weeknd-tickets-poster.jpg"></figure>-->
      </div>
    </div>
    <!--      <div class="msg">OkayyLetssGoo</div>-->
    <div id="console" />
    <div class="marker-container">
      <!--      <Marker />-->
    </div>
  </div>
</template>

<script lang="ts" setup>
import Popup from '~/components/Popup.vue'
import { useEventsStore } from '~/store/events'

definePageMeta({
  title: 'Tickets',
  description: 'Tickets'

})

const eventStore = useEventsStore()
eventStore.fetchEvents()
const events = eventStore.getEvents

</script>

<style scoped>
a {
    text-decoration: none;
    color: blue;
    font-size: 30px;
    font-family: Brutalism, sans-serif;
}

a:hover {
    color: red;
}

a {
    transition: color 0.8s linear 0.2s;
}

.content-all {
    width: 210px;
    margin: auto;
    perspective: 800px;
    position: relative;
    margin-top: 50px;
}

.content-carrousel {
    width: 100%;
    position: absolute;
    animation: rotar 20s infinite linear;
    transform-style: preserve-3d;
}

.content-carrousel:hover {
    animation-play-state: paused;
}

.content-carrousel figure {
    width: 100%;
    height: 250px;
    overflow: hidden;
    position: absolute;
    box-shadow: 0px 0px 20px 0px black;
    transition: all 300ms;
}

.content-carrousel figure:hover {
    box-shadow: 0px 0px 0px 0px black;
    transition: all 300ms;
}

.content-carrousel figure:nth-child(1) {
    transform: rotateY(0deg) translateZ(300px);
}

.content-carrousel figure:nth-child(2) {
    transform: rotateY(40deg) translateZ(300px);
}

.content-carrousel figure:nth-child(3) {
    transform: rotateY(80deg) translateZ(300px);
}

.content-carrousel figure:nth-child(4) {
    transform: rotateY(120deg) translateZ(300px);
}

.content-carrousel figure:nth-child(5) {
    transform: rotateY(160deg) translateZ(300px);
}

.content-carrousel figure:nth-child(6) {
    transform: rotateY(200deg) translateZ(300px);
}

.content-carrousel figure:nth-child(7) {
    transform: rotateY(240deg) translateZ(300px);
}

.content-carrousel figure:nth-child(8) {
    transform: rotateY(280deg) translateZ(300px);
}

.content-carrousel figure:nth-child(9) {
    transform: rotateY(320deg) translateZ(300px);
}

.content-carrousel figure:nth-child(10) {
    transform: rotateY(360deg) translateZ(300px);
}

.content-carrousel img {
    width: 100%;
    transition: all 300ms;
}

.content-carrousel img:hover {
    transform: scale(1.2);
    transition: all 300ms;
}

@keyframes rotar {
    from {
        transform: rotateY(0deg);
    }
    to {
        transform: rotateY(360deg);
    }
}

body {
    margin: cover;
    background: black;
    overflow: hidden;
    background-size: cover;
}

* {
    box-sizing: border-box;
}

p {
    font-family: monospace;
    font-weight: bold;
    font-size: 4.1vh;
    margin: 0;
    padding: 0;
    line-height: 1;
    color: limegreen;
    text-shadow: 0px 0px 10px limegreen;
}

.msg {
    font-family: monospace;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 5vh;
    padding-top: 5vh;
    background: red;
    box-shadow: 0 0 30px red;
    text-shadow: 0 0 20px white;
    color: white;
    width: 20vw;
    height: 15vh;
    position: absolute;
    left: 50%;
    margin-left: -10vw;
    top: 50%;
    margin-top: -5vh;
    text-align: center;
    min-width: 200px;
    animation-name: blink;
    animation-duration: 0.6s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-timing-function: linear;
}

@keyframes blink {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

.marker-container {
    position: fixed;
    left: 50%;
    bottom: 10px;

}
</style>
