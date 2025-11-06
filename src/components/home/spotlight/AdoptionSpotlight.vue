<script setup lang="ts">
import { computed } from 'vue'
import PetItem from '../../common/pet-item/PetItem.vue'
import { useIsMobile } from '../../../utils/useIsMobile'

const isMobile = useIsMobile()

// Pre-define pets array to avoid recreation
const allPets = ['Crystal', 'Montclair', 'Apricot', 'Casper']

const displayedPets = computed(() => {
  if (isMobile.value) {
    const randomIndex = Math.floor(Math.random() * allPets.length)
    return [allPets[randomIndex]]
  }
  return allPets
})
</script>

<template>
  <section class="adoption-spotlight">
    <h4>Adoption Spotlight</h4>
    <div class="pet-list">
      <PetItem v-for="pet in displayedPets" :key="pet" :name="pet" />
    </div>
  </section>
</template>

<style scoped lang="css">
.adoption-spotlight {
  background-color: var(--white);
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: -120px auto 0;
  max-width: var(--desktop-breakpoint);
  padding: 24px 50px 40px 50px;

  & h4 {
    font-size: 2rem;
    color: var(--font-color-dark);
  }

  .pet-list {
    display: flex;
    gap: 3rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (max-width: 440px) {
    margin: -3rem 0 0;
    padding: 1rem 2rem;
    gap: 0.5rem;
    & h4 {
      font-size: 1.5rem;
    }
    .pet-list {
      gap: 1rem;
    }
  }
}
</style>
