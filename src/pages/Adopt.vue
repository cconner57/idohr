<script setup lang="ts">
import AdoptDetail from '../components/adopt-view/AdoptDetail.vue'
import AdoptSummary from '../components/adopt-view/AdoptSummary.vue'
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
}
main {
  width: 90%;
}
</style>
