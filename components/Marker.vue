<template>
    <div>
      <svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
        <use href="#pill_shadow" transform="scale(.9, .3) translate(32 1150)" />
        <use href="#everything">
          <animateTransform attributeName="transform" type="rotate" dur="4s" repeatCount="indefinite" calcMode="spline"
            keyTimes="0;0.5;1" keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
            values="40 256 256; -40 256 256; 40 256 256" />
        </use>
        <defs>
          <g id="everything">
            <use href="#pill_top" filter="url(#shadowTop)" />
            <use href="#pill_bottom_back" />
            <use href="#pill_bottom" filter="url(#shadowBottom)" stroke="#0d2b45" stroke-width="2" />
            <use href="#bubble1" />
            <use href="#bubble2" />
            <use href="#bubble3" />
            <use href="#bubble4" />
            <use href="#pill_outline" stroke="#0d2b45" stroke-width="10" />
            <use href="#pill_outline" stroke="#ffd4a3" stroke-width="6" />
          </g>
          <path id="pill_outline" stroke-linejoin="round">
            <animate attributeName="d" dur="2s" repeatCount="indefinite" calcMode="spline"
              keyTimes="0;0.5;1" keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
              values="M198 152  C198 82 314 82 314 152  L314 358  C314 424 198 424 198 358 L198 152Z;
              M198 162  C198 92 314 92 314 162  L314 348  C314 414 198 414 198 348 L198 162Z;
              M198 152  C198 82 314 82 314 152  L314 358  C314 424 198 424 198 358 L198 152Z" />
          </path>
          <g id="pill_shadow" filter="url(#labelClip)">
            <use href="#pill_outline" fill="#8d697a80" y="128">
              <animateTransform attributeName="transform" type="rotate" dur="4s" repeatCount="indefinite"
                values="90 256 384; -270 256 384" additive="sum" />
            </use>
          </g>
          <path id="pill_bottom" fill="#8d697a">
            <animate attributeName="d" dur="4s" repeatCount="indefinite" calcMode="linear"
              keyTimes="0;0.25;0.5;0.75;1" keySplines="0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1"
              values="M198 256  C198 256 314 256 314 256  L314 358  C314 420 198 420 198 358 L198 256Z;
              M198 256  C198 226 314 226 314 256  L314 348  C314 420 198 420 198 348 L198 256Z;
              M198 256  C198 256 314 256 314 256  L314 358  C314 420 198 420 198 358 L198 256Z;
              M198 256  C198 286 314 286 314 256  L314 348  C314 420 198 420 198 348 L198 256Z;
              M198 256  C198 256 314 256 314 256  L314 358  C314 420 198 420 198 358 L198 256Z" />
          </path>
          <path id="pill_bottom_back" fill="#d08159">
            <animate attributeName="d" dur="4s" repeatCount="indefinite" calcMode="linear"
              keyTimes="0;0.25;0.5;0.75;1" keySplines="0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1"
              values="M198 256  C198 256 314 256 314 256  L314 358  C314 414 198 414 198 358 L198 256Z;
              M198 256  C198 286 314 286 314 256  L314 348  C314 414 198 414 198 348 L198 256Z;
              M198 256  C198 256 314 256 314 256  L314 358  C314 414 198 414 198 358 L198 256Z;
              M198 256  C198 226 314 226 314 256  L314 348  C314 414 198 414 198 348 L198 256Z;
              M198 256  C198 256 314 256 314 256  L314 358  C314 414 198 414 198 358 L198 256Z;" />
          </path>
          <circle id="bubble1" cy="180" r="4" fill="#d08159">
            <animate attributeName="cx" dur="4s" repeatCount="indefinite" calcMode="spline"
              keyTimes="0;0.5;1" keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
              values="216;266;216" />
          </circle>
          <circle id="bubble2" cy="160" r="6" fill="#d08159">
            <animate attributeName="cx" dur="4s" repeatCount="indefinite" calcMode="spline"
              keyTimes="0;0.5;1" keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
              values="236;276;236" />
          </circle>
          <circle id="bubble3" cy="140" r="10" fill="#d08159">
            <animate attributeName="cx" dur="4s" repeatCount="indefinite" calcMode="spline"
              keyTimes="0;0.5;1" keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
              values="226;276;226" />
          </circle>
          <circle id="bubble4" cy="135" r="4" fill="#d08159">
            <animate attributeName="cx" dur="4s" repeatCount="indefinite" calcMode="spline"
              keyTimes="0;0.5;1" keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
              values="276;236;276" />
          </circle>
          <path id="pill_top" fill="#ffaa5e" stroke-width="2">
            <animate attributeName="d" dur="4s" repeatCount="indefinite" calcMode="linear"
              keyTimes="0;0.25;0.5;0.75;1" keySplines="0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1"
              values="M198 256  C198 256 314 256 314 256  L314 152  C314 82 198 82 198 152 L198 256Z;
              M198 256  C198 226 314 226 314 256  L314 162  C314 92 198 92 198 162 L198 256Z;
              M198 256  C198 256 314 256 314 256  L314 152  C314 82 198 82 198 152 L198 256Z;
              M198 256  C198 286 314 286 314 256  L314 162  C314 92 198 92 198 162 L198 256Z;
              M198 256  C198 256 314 256 314 256  L314 152  C314 82 198 82 198 152 L198 256Z" />
          </path>
          <filter id="shadowBottom">
            <feOffset dx="-32" dy="-8" />
            <feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse" />
            <feFlood flood-color="#0d2b45" result="color" />
            <feComposite operator="in" in="color" in2="inverse" result="shadow" />
            <feComposite operator="over" in="shadow" in2="SourceGraphic" />
          </filter>
          <filter id="shadowTop">
            <feOffset dx="-32" dy="4" />
            <feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse" />
            <feFlood flood-color="#d08159" result="color" />
            <feComposite operator="in" in="color" in2="inverse" result="shadow" />
            <feComposite operator="over" in="shadow" in2="SourceGraphic" />
          </filter>
        </defs>
      </svg>
    </div>
  </template>

  <script setup lang="ts">
  </script>

  <style scoped>
  body,
  html {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }


  svg {
    height: 10%;
    width: 10%;
  }
  </style>
