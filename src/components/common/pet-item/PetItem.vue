<script setup lang="ts">
import { useRouter } from 'vue-router'
import { goToAdopt } from '../../../utils/navigate'
import Button from '../ui/Button.vue'
import { ref, type PropType } from 'vue'
import Capsules from '../ui/Capsules.vue'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  capsules: {
    type: Array as PropType<string[]>,
    required: false,
    default: () => [],
  },
  photo: {
    type: String as PropType<string | null>,
    required: false,
  },
})
const router = useRouter()

const imgError = ref(false)

function onImgError() {
  imgError.value = true
}

function handleAdopt() {
  goToAdopt(router, props.id.toLowerCase())
}
</script>

<template>
  <div class="pet-item">
    <img
      v-if="!imgError"
      :src="`/images/${props.photo ?? ''}`"
      :alt="props.name"
      height="300"
      width="300"
      loading="lazy"
      @error="onImgError"
      @click="handleAdopt"
    />
    <div v-else class="img-fallback" aria-hidden="true" @click="handleAdopt"></div>
    <div class="info-section">
      <h5>{{ props.name }}</h5>
      <div v-if="props.capsules.length > 0" class="capsules">
        <template v-for="capText in props.capsules" :key="capText">
          <Capsules v-if="capText && capText !== 'Invalid Date'">{{ capText }}</Capsules>
        </template>
      </div>
      <p v-if="props.description">{{ props.description }}</p>
      <Button title="Adopt Me" color="blue" @click="handleAdopt" :fullWidth="true" />
    </div>
  </div>
</template>

<style scoped lang="css">
.pet-item {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 280px;
  border-radius: 8px;
  overflow: hidden;
  background-color: var(--white);
  color: var(--font-color-dark);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.25);
}

.pet-item img {
  width: 100%;
  object-fit: cover;
  height: 250px;
  background: url('/images/paw.svg') 90px 60px/100px 100px no-repeat #add8e6;
  cursor: pointer;
}

.pet-item .img-fallback {
  width: 100%;
  height: 250px;
  background: url('/images/paw.svg') 90px 60px/100px 100px no-repeat #add8e6;
}

.pet-item .info-section {
  display: flex;
  flex-direction: column;
  padding: 0 20px 16px;
}

.pet-item h5 {
  font-size: 1.5rem;
  margin-bottom: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.pet-item .capsules {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 16px;
}

.pet-item p {
  font-size: 1rem;
  flex-grow: 1;
  margin-bottom: 12px;
}
</style>
