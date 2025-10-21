<script setup lang="ts">
import type { IPet } from 'src/models/common'
import PetItem from '../pet-item/PetItem.vue'

defineProps<{
  pets: IPet[]
}>()
</script>

<template>
  <div class="adopt-summary">
    <PetItem
      v-for="pet in pets"
      :key="pet.slug"
      :name="pet.name"
      :description="pet.physicalTraits?.physicalDescription"
    />
  </div>
</template>

<style scoped lang="css">
.adopt-summary {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
}
</style>
