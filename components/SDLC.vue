<template>
  <h2>Software Development Life Cycle (SDLC)</h2>

  <div class="flex justify-center items-center gap-4 mt-6 mb-4">
    <template v-for="(step, idx) in steps" :key="step.title">
      <Step :idx="idx" :step="step" :total-steps="steps.length" />
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
