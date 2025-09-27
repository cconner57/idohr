<script setup lang="ts">
import { useRouter } from 'vue-router'
import { goToAdopt } from '../../utils/navigate'
import Button from '../ui/Button.vue'

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
const router = useRouter()

function handleAdopt() {
  goToAdopt(router)
}
</script>

<template>
  <div class="pet-item">
    <img src="https://placehold.co/600x600" alt="test" height="300" width="300" />
    <h5>{{ props.name }}</h5>
    <p>{{ props.description }}</p>
    <div class="button-section">
      <Button title="Adopt Me" color="blue" @click="handleAdopt" />
    </div>
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
.button-section {
  display: flex;
  justify-content: center;
  padding-bottom: 16px;
}
</style>
