<template>
  <div class="bg-black w-full h-full absolute top-0 left-0 text-white">
    <!-- 動態背景漸層動畫容器 -->
    <div class="absolute inset-0 z-0 pointer-events-none">
      <div class="absolute inset-0 animate-gradient blueToBlack"></div>
    </div>

    <div class="h-full w-full absolute top-0 left-0 p-2">
      <div class="border-slate-600 border h-full w-full"></div>
    </div>

    <div class="h-full w-full absolute top-0 left-0 p-4">
      <div class="border-slate-600 border h-full w-full"></div>
    </div>

    <div
      class="absolute left-0 top-0 h-full w-1/2 flex items-center justify-center pointer-events-none"
    >
      <div
        class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl bg-indigo-400 animate-breath"
      ></div>
      <div class="flex flex-col gap-2">
        <div class="z-10 text-slate-300 text-2xl font-mono tracking-widest">
          Calpa 的鍊金工房
        </div>
        <div
          class="z-10 text-slate-300 text-sm opacity-70 font-mono tracking-wide"
        >
          用語言與公式編織全新的現實
        </div>
        <div
          class="text-xs text-slate-400 italic mt-1 tracking-wide opacity-50"
        >
          「ことばと式で、あたらしい現実を錬成する。」
        </div>
      </div>
    </div>

    <Particles />
    <LoadingText />
  </div>
</template>

<style>
@keyframes breathing {
  0%,
  100% {
    opacity: 0.25;
  }
  50% {
    opacity: 0.1;
  }
}
.animate-breath {
  animation: breathing 5s ease-in-out infinite;
}

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
