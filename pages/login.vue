<template>
    <div>
        <nav class="menu">
      <div class="menu__item">
        <a class="menu__item-link" @click="showLoginPopup = true">Anmelden</a>
        <img class="menu__item-img" src="https://images.unsplash.com/photo-1572883475077-fb5aca766ace?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=668&q=80"/>
        <div class="marquee">
          <div class="marquee__inner">
            <span>Anmelden</span>
            <span>Anmelden</span>
            <span>Anmelden</span>
            <span>Anmelden</span>
          </div>
        </div>
      </div>
        <div class="menu__item">
          <a class="menu__item-link">Registrieren</a>
          <img class="menu__item-img" src="https://images.unsplash.com/photo-1550605355-e83808a20860?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=668&q=80"/>
          <div class="marquee">
            <div class="marquee__inner">
              <span>Registrieren</span>
              <span>Registrieren</span>
              <span>Registrieren</span>
              <span>Registrieren</span>
            </div>
          </div>
        </div>
        <div class="menu__item">
          <a class="menu__item-link">Kontakte</a>
          <img class="menu__item-img" src="https://images.unsplash.com/photo-1560918801-53fe5c710a80?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1250&q=80"/>
          <div class="marquee">
            <div class="marquee__inner">
              <span>Kontakte</span>
              <span>Kontakte</span>
              <span>Kontakte</span>
              <span>Kontakte</span>
            </div>
          </div>
        </div>
        <div class="menu__item">
          <a class="menu__item-link">Brutal</a>
          <img class="menu__item-img" src="https://images.unsplash.com/photo-1544276695-78ee85a81e64?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=712&q=80"/>
          <div class="marquee">
            <div class="marquee__inner">
              <span>Brutal</span>
              <span>Brutal</span>
              <span>Brutal</span>
              <span>Brutal</span>
            </div>
          </div>
        </div>
        <div class="menu__item">
          <a class="menu__item-link">The Crew</a>
          <img class="menu__item-img" src="https://images.unsplash.com/photo-1574242922402-b02a4423b7b2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=668&q=80"/>
          <div class="marquee">
            <div class="marquee__inner" aria-hidden="true">
              <span>The Crew</span>
              <span>The Crew</span>
              <span>The Crew</span>
              <span>The Crew</span>
            </div>
          </div>
        </div>
      </nav>
      <div v-if="showLoginPopup" class="popup-container">
      <div class="popup">
        <!-- Inhalt des Anmelde-Popup -->
        <!-- Hier kannst du das Anmeldeformular und andere Elemente hinzufügen -->
        <h2>Anmeldung</h2>
        <form>
          <!-- Anmeldeformularfelder -->
        </form>
        <button @click="showLoginPopup = false">Schließen</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  data() {
    return {
      showLoginPopup: ref(false),
    };
  },
});
</script>

  <style>
  body {
    margin: 0;
    font-family: "Monument Extended", sans-serif;
    background: url(https://media.giphy.com/media/3oEduMhFrYvKk4giac/giphy.gif) no-repeat 50% 50%;
      background-size: 100% 100%;
  }

  .menu__item {
    position: relative;
    padding: 0 6vw;
  }

  .menu__item-link {
    display: inline-block;
    cursor: pointer;
    position: relative;
    -webkit-text-stroke: 1.5px #ffff;
    -webkit-text-fill-color: transparent;
    color: transparent;
    transition: opacity 0.4s;
  }

  .menu__item-link::before {
    all: initial;
    font-family: sofia-pro, sans-serif;
    counter-increment: menu;
    position: absolute;
    bottom: 60%;
    left: 0;
    pointer-events: none;
  }

  .menu__item-link:hover {
    transition-duration: 0.1s;
    opacity: 0;
  }

  .menu__item-img {
    pointer-events: none;
    position: absolute;
    height: 50vh;
    max-height: 400px;
    opacity: 0;
    left: 100%;
    top: 50%;
    transform: translate3d(calc(-100% - 6vw),-30%,0) translate3d(0,20px,0);
  }

  .menu__item-link:hover + .menu__item-img {
    opacity: 1;
    transform: translate3d(calc(-100% - 6vw),-30%,0) rotate3d(0,0,1,4deg);
    transition: all 0.4s;
  }

  .menu {
    padding: 10vh 0 25vh;
    --offset: 20vw;
    --move-initial: calc(-25% + var(--offset));
    --move-final: calc(-50% + var(--offset));
    font-size: 7vw;
  }

  .marquee {
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    color: #fff;
    pointer-events: none;
    mix-blend-mode: difference;
  }

  .marquee__inner {
    width: fit-content;
    display: flex;
    position: relative;
    animation: marquee 5s linear infinite;
    animation-play-state: paused;
    opacity: 0;
    transition: opacity 0.1s;
  }

  .menu__item-link:hover ~ .marquee .marquee__inner {
    animation-play-state: running;
    opacity: 1;
    transition-duration: 0.4s;
  }

  .menu__item-link,
  .marquee span {
    white-space: nowrap;
    font-size: 7vw;
    padding: 0 1vw;
    font-weight: 900;
    line-height: 1.15;
  }

  .marquee span {
    font-style: italic;
  }

  @keyframes marquee {
    0% {
      transform: translate3d(var(--move-initial), 0, 0);
    }

    100% {
      transform: translate3d(var(--move-final), 0, 0);
    }
  }

  .popup-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
}

.popup {
  background-color: white;
  padding: 20px;
  margin-bottom: 20px;
}
</style>
