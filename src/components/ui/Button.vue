<script setup lang="ts">
const props = defineProps<{
  title: string
  onClick?: () => void
}>()
</script>

<template>
  <button @click="props.onClick && props.onClick()">{{ props.title }}</button>
</template>

<style scoped lang="css">
button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: var(--green);
  height: 48px;
  min-width: 160px;
  padding: 0 24px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 6px;
}
</style>
