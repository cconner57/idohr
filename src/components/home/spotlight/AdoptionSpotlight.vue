<script setup lang="ts">
import PetItem from '../../common/pet-item/PetItem.vue'

const isMobile = window.innerWidth <= 440
</script>

<template>
  <section class="adoption-spotlight">
    <h4>Adoption Spotlight</h4>
    <div class="pet-list">
      <PetItem name="Crystal" />
      <PetItem name="Montclair" v-if="!isMobile" />
      <PetItem name="Apricot" v-if="!isMobile" />
      <PetItem name="Casper" v-if="!isMobile" />
    </div>
  </section>
</template>

<style scoped lang="css">
.adoption-spotlight {
  max-width: 80%;
  min-width: 300px;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px 50px 40px 50px;
  border-radius: 12px;
  margin: -120px 0 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.25);

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
    margin: -4rem 0 0;
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
