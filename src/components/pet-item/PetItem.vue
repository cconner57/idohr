<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
    default: 'A lovely pet looking for a forever home',
  },
})
</script>

<template>
  <div class="pet-item">
    <img src="https://placehold.co/600x600" alt="test" height="300" width="300" />
    <h5>{{ props.name }}</h5>
    <p>{{ props.description }}</p>
    <button class="adopt-me-button">Adopt Me</button>
  </div>
</template>

<style scoped lang="css">
.pet-item {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 300px;
  border-radius: 8px;
  overflow: hidden;
  background-color: var(--white);
  color: var(--font-color-dark);
  h5 {
    font-size: 1.5rem;
    padding: 0 16px;
  }
  p {
    font-size: 1rem;
    padding: 0 16px;
    flex-grow: 1;
  }
}
.adopt-me-button {
  background-color: var(--green);
  height: 48px;
  min-width: 160px;
  padding: 8px 24px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 6px;
  align-self: center;
  margin: 8px 0;
}
</style>
