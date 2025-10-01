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
    <img
      :src="`/images/${props.name.toLowerCase() ?? ''}.jpeg`"
      :alt="props.name"
      height="300"
      width="300"
    />
    <div class="info-section">
      <h5>{{ props.name }}</h5>
      <p>{{ props.description }}</p>
      <Button title="Adopt Me" color="blue" @click="handleAdopt" :fullWidth="true" />
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
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.25);

  img {
    width: 100%;
    object-fit: cover;
    height: 250px;
  }
  .info-section {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 0 20px 16px;
  }
  h5 {
    font-size: 1.5rem;
  }
  p {
    font-size: 1rem;
    flex-grow: 1;
  }
}
</style>
