<!-- LoadingText.vue -->

<template>
  <!-- 半圓形漸層背景，固定在右側半屏 -->
  <div
    class="fixed inset-y-0 right-0 w-1/2 flex items-center justify-center z-10 pointer-events-none"
  >
    <div
      class="absolute right-0 top-1/2 -translate-y-1/2 w-full h-[120%] rounded-l-full bg-gradient-to-br from-blue-900 via-blue-900 to-black opacity-80"
      style="clip-path: ellipse(100% 60% at 100% 50%)"
    ></div>
    <p
      class="relative text-2xl tracking-widest font-mono animate-typing-right border-white pr-2 whitespace-nowrap drop-shadow-lg px-6 py-3 rounded-lg z-20"
    >
      Now loading...
    </p>
  </div>
</template>

<style>
/* 修正打字動畫，寬度為半屏寬度，文字逐步顯示，游標閃爍 */
@keyframes typingRight {
  from {
    width: 0;
  }
  to {
    width: 14ch;
  }
}
@keyframes blinkRight {
  0%,
  100% {
    border-color: transparent;
  }
  50% {
    border-color: white;
  }
}
.animate-typing-right {
  @apply overflow-hidden whitespace-nowrap inline-block border-r-2 border-white;
  width: 0;
  max-width: 100vw;
  animation: typingRight 2.2s steps(14, end) 1s forwards,
    blinkRight 0.75s step-end infinite;
}
</style>
