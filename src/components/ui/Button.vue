<script setup lang="ts">
const props = defineProps<{
  title: string
  color: 'green' | 'blue' | 'purple'
  onClick?: () => void
}>()
</script>

<template>
  <button
    :style="{ backgroundColor: `var(--${props.color})` }"
    @click="props.onClick && props.onClick()"
  >
    {{ props.title }}
  </button>
</template>

<style scoped lang="css">
button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  min-width: 160px;
  padding: 0 24px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 6px;
  &:hover {
    cursor: pointer;
  }
}
</style>
