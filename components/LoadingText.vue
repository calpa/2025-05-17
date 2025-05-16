<template>
  <div class="fixed inset-y-0 right-0 w-1/2 flex items-center justify-center z-10 pointer-events-none">
    <!-- 背景半圓 -->
    <div
      class="absolute right-0 top-1/2 w-full h-[120%] opacity-60 z-0 border-slate-600 border-l-2"
      style="background: linear-gradient(to bottom right, #1e3a8a, #1e3a8a, #000);
             border-top-left-radius: 9999px;
             border-bottom-left-radius: 9999px;
             clip-path: ellipse(100% 60% at 100% 50%);
             transform: translateY(-50%);">
    </div>

    <!-- 打字文字 -->
    <span class="relative z-20 py-3 drop-shadow-lg font-mono text-2xl tracking-widest whitespace-nowrap overflow-hidden inline-block animate-typing-loop">
      Now loading...
    </span>
  </div>
</template>

<style>
@keyframes typingLoop {
  0% {
    width: 0;
  }
  30% {
    width: 16ch;
  }
  60% {
    width: 16ch;
  }
  90% {
    width: 0;
  }
  100% {
    width: 0;
  }
}

@keyframes blinkRight {
  0%, 100% {
    border-color: transparent;
  }
  50% {
    border-color: white;
  }
}

.animate-typing-loop {
  width: 0;
  animation:
    typingLoop 10s steps(16, end) infinite;
}
</style>
