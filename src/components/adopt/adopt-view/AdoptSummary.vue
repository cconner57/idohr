<script setup lang="ts">
import type { IPet } from '../../../models/common'
import PetItem from '../../common/pet-item/PetItem.vue'

defineProps<{
  pets: IPet[]
}>()
</script>

<template>
  <div class="adopt-summary">
    <PetItem
      v-for="pet in pets"
      :capsules="[
        pet?.physicalTraits?.species ?? '',
        pet?.physicalTraits?.sex ?? '',
        pet?.physicalTraits?.age ?? '',
      ]"
      :description="pet.descriptions?.physicalDescription"
      :id="pet.id"
      :key="pet.id"
      :name="pet.name"
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
