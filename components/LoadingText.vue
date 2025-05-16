<!-- LoadingText.vue -->
<template>
  <div class="loading-text-container">
    <div class="loading-text-bg" aria-hidden="true"></div>
    <span class="loading-text-typing">Now loading...</span>
  </div>
</template>

<style>
@layer utilities {
  @keyframes typingRight {
    from {
      width: 0;
    }
    to {
      width: 100%;
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
  .loading-text-container {
    @apply fixed inset-y-0 right-0 w-1/2 flex items-center justify-center z-10 pointer-events-none;
  }
  .loading-text-bg {
    @apply absolute right-0 top-1/2 w-full h-[120%] opacity-80 z-0;
    border-top-left-radius: 9999px;
    border-bottom-left-radius: 9999px;
    background: linear-gradient(to bottom right, #1e3a8a, #1e3a8a, #000);
    transform: translateY(-50%);
    clip-path: ellipse(100% 60% at 100% 50%);
  }
  .loading-text-typing {
    @apply relative z-20 px-6 py-3 rounded-lg drop-shadow-lg font-mono text-2xl tracking-widest whitespace-nowrap overflow-hidden inline-block border-r-2 border-white;
    @apply w-0 max-w-[100vw] overflow-hidden whitespace-nowrap inline-block border-r-2 border-white;
    animation: typingRight 4.4s steps(50, end) 0s forwards infinite,
      blinkRight 0.75s step-end infinite;
  }
}
</style>
