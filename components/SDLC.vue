<template>
  <h2>Software Development Life Cycle (SDLC)</h2>

  <div class="flex justify-center items-center gap-4 mt-6 mb-4">
    <template v-for="(step, idx) in steps" :key="step.title">
      <div :class="['flex flex-col items-center', idx === 0 ? '' : '']">
        <div
          class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-xl"
        >
          {{ idx + 1 }}
        </div>
        <div class="mt-2 text-xs font-semibold text-center">
          {{ step.title }}<br />
          <span class="text-[10px] text-gray-400">{{ step.subtitle }}</span>
        </div>
      </div>
      <div v-if="idx < steps.length - 1" class="text-2xl text-gray-400">→</div>
    </template>
  </div>
</template>

<script setup lang="ts">
const steps = [
  { title: '需求分析', subtitle: 'Requirement Analysis' },
  { title: '規劃設計', subtitle: 'Planning & Design' },
  { title: '開發實作', subtitle: 'Implementation' },
  { title: '測試驗證', subtitle: 'Testing' },
  { title: '部署交付', subtitle: 'Deployment' },
  { title: '維運優化', subtitle: 'Maintenance' },
]
</script>
