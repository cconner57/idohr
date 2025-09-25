<script setup lang="ts">
import { computed } from 'vue'
const props = withDefaults(
  defineProps<{
    imgSrc: string
    title: string
    subtitle: string
    color: string
    type?: 'button' | 'submit' | 'reset'
  }>(),
  {
    imgSrc: '',
    title: 'Adopt a Pet',
    subtitle: 'Find your perfect companion',
    color: '#2563EB',
    type: 'button',
  },
)

const placeholderSvg = `
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
  <rect width='24' height='24' rx='4' fill='%23E5E7EB'/>
  <path d='M7 14l3-4 2.5 3.5L17 9l4 6H7z' fill='%239CA3AF'/>
</svg>`

const placeholderDataUri = `data:image/svg+xml;utf8,${encodeURIComponent(placeholderSvg)}`

const imgSrcComputed = computed(() =>
  props.imgSrc && props.imgSrc.length ? props.imgSrc : placeholderDataUri,
)
</script>

<template>
  <button
    :style="{ backgroundColor: `var(--${props.color})` }"
    class="banner-button"
    :type="props.type"
    :aria-label="props.title"
  >
    <img :src="imgSrcComputed" :alt="props.title" height="48" width="48" />

    <div class="banner-text">
      <h5>{{ props.title }}</h5>
      <p>{{ props.subtitle }}</p>
    </div>
  </button>
</template>

<style scoped lang="css">
.banner-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 24px;
  border-radius: 8px;
  cursor: pointer;
  height: 160px;
  width: 300px;
  transition:
    background-color 0.2s,
    border-color 0.2s;
  color: var(--font-color-light);
}
.banner-text {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
img {
  border-radius: 8px;
}
h5 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
}
p {
  margin: 0;
  font-size: 1rem;
}
</style>
