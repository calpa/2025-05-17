<!-- LoadingScene.vue -->
<template>
  <!-- 動態背景漸層動畫容器 -->
  <div class="absolute inset-0 z-0 pointer-events-none">
    <div
      class="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-900 to-black opacity-80 z-0 animate-gradient"
    ></div>
  </div>

  <Particles />

  <LoadingText />
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
}
</style>
