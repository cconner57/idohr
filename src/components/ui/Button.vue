<script setup lang="ts">
const props = defineProps<{
  title: string
  color: 'green' | 'blue' | 'purple'
  onClick?: () => void
}>()
</script>

<template>
  <button
    :class="{
      'button-blue': props.color === 'blue',
      'button-green': props.color === 'green',
      'button-purple': props.color === 'purple',
    }"
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
  transition: background-color 0.2s;
  &:hover {
    cursor: pointer;
  }
}

.button-green {
  background-color: var(--green);
  &:hover {
    background-color: var(--green-hover);
  }
}
.button-blue {
  background-color: var(--blue);
  &:hover {
    background-color: var(--blue-hover);
  }
}
.button-purple {
  background-color: var(--purple);
  &:hover {
    background-color: var(--purple-hover);
  }
}
</style>
