<script setup lang="ts">
import AdoptDetail from '../components/adopt/adopt-view/AdoptDetail.vue'
import AdoptSummary from '../components/adopt/adopt-view/AdoptSummary.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { mockPetsData } from '../stores/mockPetData'

const props = defineProps<{ slug?: string }>()
const route = useRoute()

const slug = computed(() => props.slug ?? (route.params.slug as string | undefined))

const pets = mockPetsData

const pet = computed(() => pets.find((p) => p.slug === slug.value))
</script>

<template>
  <div class="adopt">
    <div class="header" v-if="!pet">
      <h1>Find your new best friend</h1>
      <p>
        Search adoptable cats and dogs across Southern California. Every adoption helps us rescue
        another life.
      </p>
    </div>
    <main>
      <AdoptDetail v-if="pet" :pet="pet!" />
      <AdoptSummary v-else :pets="pets" />
    </main>
  </div>
</template>

<style scoped lang="css">
.adopt {
  width: 100%;
  padding: 8rem 0 3rem 11.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: var(--green);
  @media (max-width: 440px) {
    padding: 4rem 1rem 2rem 1rem;
    gap: 30px;
  }
}
.header {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  & h1 {
    font-size: 3.5rem;
    color: var(--font-color-light);
  }
  & p {
    font-size: 1.25rem;
    color: var(--font-color-light);
    min-width: 400px;
    max-width: 100%;
    font-weight: 400;
  }
  @media (max-width: 440px) {
    padding: 1.5rem 1rem 0;
    & h1 {
      font-size: 2.5rem;
      color: var(--font-color-light);
      line-height: 3rem;
    }
    & p {
      font-size: 1.05rem;
      min-width: auto;
    }
  }
}
main {
  width: 90%;
  @media (max-width: 440px) {
    width: 100%;
  }
}
</style>
