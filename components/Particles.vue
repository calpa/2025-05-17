<!-- Particles.vue -->

<template>
  <!-- 粒子動畫層 -->
  <svg
    class="absolute inset-0 w-full h-full z-10 animate-particles pointer-events-none"
    viewBox="0 0 800 600"
    fill="none"
  >
    <circle
      v-for="(particle, i) in particles"
      :key="i"
      class="particle fill-blue-600"
      :cx="particle.cx"
      :cy="particle.cy"
      :r="particle.r"
    />
  </svg>
</template>

<script lang="ts" setup>
const particles = [
  { cx: 80, cy: 100, r: 2.5 },
  { cx: 300, cy: 200, r: 1.7 },
  { cx: 700, cy: 450, r: 2.8 },
  { cx: 400, cy: 350, r: 1.9 },
  { cx: 600, cy: 120, r: 2.2 },
  { cx: 150, cy: 500, r: 2.1 },
  { cx: 250, cy: 400, r: 1.8 },
  { cx: 500, cy: 250, r: 2.6 },
  { cx: 120, cy: 300, r: 2.0 },
  { cx: 700, cy: 70, r: 2.4 },
  { cx: 340, cy: 570, r: 1.5 },
  { cx: 760, cy: 550, r: 2.1 },
  { cx: 60, cy: 560, r: 1.8 },
  { cx: 740, cy: 320, r: 2.6 },
  { cx: 220, cy: 80, r: 2.0 },
]
</script>

<style>
/* 粒子動畫 */
@keyframes particleMove1 {
  0% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-60px) scale(1.3);
  }
  100% {
    transform: translateY(0) scale(1);
  }
}
@keyframes particleMove2 {
  0% {
    transform: translateX(0) scale(1);
  }
  50% {
    transform: translateX(40px) scale(0.8);
  }
  100% {
    transform: translateX(0) scale(1);
  }
}
@keyframes particleMove3 {
  0% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(-40px, 30px) scale(1.2);
  }
  100% {
    transform: translate(0, 0) scale(1);
  }
}
@keyframes particleFade {
  0%,
  100% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
}
.animate-particles .particle:nth-child(1) {
  animation: particleMove1 7s ease-in-out infinite, particleFade 4s infinite;
}
.animate-particles .particle:nth-child(2) {
  animation: particleMove2 10s ease-in-out infinite,
    particleFade 5s 0.7s infinite;
}
.animate-particles .particle:nth-child(3) {
  animation: particleMove3 12s ease-in-out infinite,
    particleFade 6s 0.5s infinite;
}
.animate-particles .particle:nth-child(4) {
  animation: particleMove1 6s ease-in-out infinite,
    particleFade 4.5s 0.9s infinite;
}
.animate-particles .particle:nth-child(5) {
  animation: particleMove2 8s ease-in-out infinite,
    particleFade 5.5s 0.3s infinite;
}
.animate-particles .particle:nth-child(6) {
  animation: particleMove3 9s ease-in-out infinite,
    particleFade 5.2s 1.1s infinite;
}
.animate-particles .particle:nth-child(7) {
  animation: particleMove1 11s ease-in-out infinite,
    particleFade 4.2s 0.4s infinite;
}
.animate-particles .particle:nth-child(8) {
  animation: particleMove2 8s ease-in-out infinite,
    particleFade 6.5s 0.2s infinite;
}
.animate-particles .particle:nth-child(9) {
  animation: particleMove3 13s ease-in-out infinite,
    particleFade 7s 0.8s infinite;
}
.animate-particles .particle:nth-child(10) {
  animation: particleMove1 6.8s ease-in-out infinite, particleFade 5.7s infinite;
}
.animate-particles .particle:nth-child(11) {
  animation: particleMove2 10.5s ease-in-out infinite,
    particleFade 4.3s 0.1s infinite;
}
.animate-particles .particle:nth-child(12) {
  animation: particleMove3 8.7s ease-in-out infinite,
    particleFade 6.8s 0.3s infinite;
}
.animate-particles .particle:nth-child(13) {
  animation: particleMove1 7.2s ease-in-out infinite,
    particleFade 5.3s 0.7s infinite;
}
.animate-particles .particle:nth-child(14) {
  animation: particleMove2 11.4s ease-in-out infinite,
    particleFade 7.1s 0.8s infinite;
}
.animate-particles .particle:nth-child(15) {
  animation: particleMove3 9.8s ease-in-out infinite,
    particleFade 6.6s 0.4s infinite;
}
</style>
