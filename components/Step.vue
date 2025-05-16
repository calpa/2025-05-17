<template>
  <div :class="['flex flex-col items-center']">
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
  <div v-if="idx < totalSteps - 1" class="text-2xl text-gray-400">→</div>
</template>

<script setup lang="ts">
interface Props {
  idx: number;
  step: {
    title: string;
    subtitle: string;
  };
  totalSteps: number;
}

withDefaults(defineProps<Props>(), {});
</script>
