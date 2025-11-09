<script setup lang="ts">
import type { IPet } from '../../../models/common'
import PetItem from '../../common/pet-item/PetItem.vue'
import { formatDate } from '../../../utils/common'

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
        pet?.physicalTraits?.age ? formatDate(pet?.physicalTraits?.age ?? '') : '',
      ]"
      :description="pet.descriptions?.physicalDescription ?? ''"
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
  row-gap: 30px;
  column-gap: 40px;
  @media (max-width: 440px) {
    justify-content: center;
  }
}
</style>
