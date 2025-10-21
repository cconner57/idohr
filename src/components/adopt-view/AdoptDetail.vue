<script setup lang="ts">
import type { IPet } from '../../models/common'

defineProps<{
  pet: IPet
}>()
</script>

<template>
  <div class="adopt-detail">
    <div>
      <img :src="`/images/${pet.name.toLowerCase() ?? ''}.jpeg`" :alt="pet.name" />
      <div>
        <h1>{{ pet.name }}</h1>
      </div>
    </div>
    <p><strong>Species:</strong> {{ pet.physicalTraits?.species }}</p>
    <p><strong>Description:</strong> {{ pet.physicalTraits?.physicalDescription }}</p>
  </div>
</template>

<style scoped lang="css">
img {
  height: auto;
  width: 40vw;
  object-fit: cover;
  border-radius: 8px;
}
</style>
