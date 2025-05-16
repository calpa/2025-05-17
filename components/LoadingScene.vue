<template>
  <!-- 動態背景漸層動畫容器 -->
  <div class="absolute inset-0 z-0 pointer-events-none">
    <div class="absolute inset-0 animate-gradient blueToBlack"></div>
  </div>

  <Particles />
  <LoadingText />
</template>

<style>
@keyframes gradientMoveForward {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}
.animate-gradient {
  @apply bg-gradient-to-br;
  @apply opacity-70 z-0;
  background-size: 400% 400%;
  animation: gradientMoveForward 8s ease-in-out alternate infinite;
}

.blueToBlack {
  @apply from-blue-900 via-blue-900 to-black;
}
</style>