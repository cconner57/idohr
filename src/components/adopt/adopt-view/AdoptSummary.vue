<script setup lang="ts">
import type { IPet } from 'src/models/common'
import PetItem from '../../common/pet-item/PetItem.vue'

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
      :description="pet.descriptions?.physicalDescription"
      :capsules="[
        pet?.physicalTraits?.species ?? '',
        pet?.physicalTraits?.sex ?? '',
        pet?.physicalTraits?.age ?? '',
      ]"
    />
  </div>
</template>

<style scoped lang="css">
.adopt-summary {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  @media (max-width: 440px) {
    justify-content: center;
  }
}
</style>
