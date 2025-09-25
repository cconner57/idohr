<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="pet-item">
    <img src="https://placehold.co/600x600" alt="test" height="300" width="300" />
    <p>{{ props.name }}</p>
    <button>Adopt Me</button>
  </div>
</template>

<style scoped lang="css">
.pet-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
</style>
