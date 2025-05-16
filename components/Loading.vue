<template>
  <!-- 動態背景漸層動畫容器 -->
  <div class="absolute inset-0 z-0 pointer-events-none">
    <div
      class="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-900 to-black opacity-80 z-0 animate-gradient"
    ></div>
  </div>

  <Particles />

  <!-- Loading 動畫字體（固定在右側半屏置中）-->
  <div
    class="fixed inset-y-0 right-0 w-1/3 flex items-center justify-center z-20 pointer-events-none bg-black/10"
  >
    <p
      class="text-2xl tracking-widest font-mono animate-typing-right border-white pr-2 whitespace-nowrap drop-shadow-lg px-6 py-3 rounded-lg"
    >
      Now loading...
    </p>
  </div>
</template>

<style>
@layer utilities {
  @keyframes gradientMoveForward {
    0% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 100% 50%;
    }
  }
  .animate-gradient {
    @apply bg-gradient-to-br from-blue-900 via-blue-900 to-black opacity-80 z-0;
    background-size: 300% 300%;
    animation: gradientMoveForward 5s ease-in-out infinite alternate;
  }

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
}
</style>
