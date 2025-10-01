<script setup lang="ts">
const props = defineProps<{
  color: 'green' | 'blue' | 'purple'
  onClick?: () => void
  size?: 'small' | 'medium' | 'large'
  title: string
  fullWidth?: boolean
}>()
</script>

<template>
  <button
    :class="{
      'button-blue': props.color === 'blue',
      'button-green': props.color === 'green',
      'button-purple': props.color === 'purple',
      small: props.size === 'small',
      medium: props.size === 'medium' || !props.size,
      large: props.size === 'large',
      'w-full': props.fullWidth,
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
  font-weight: 600;
  border-radius: 6px;
  transition: background-color 0.2s;
  &:hover {
    cursor: pointer;
  }
}

.small {
  height: 30px;
  min-width: 120px;
  padding: 0 16px;
  font-size: 0.875rem;
}

.medium {
  height: 40px;
  min-width: 160px;
  padding: 0 24px;
  font-size: 1rem;
}

.large {
  height: 60px;
  min-width: 220px;
  padding: 0 32px;
  font-size: 1.5rem;
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

.w-full {
  width: 100%;
}
</style>
