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
    <div class="header">
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
.wrap {
  max-width: 1100px;
  margin: 0 auto;
  padding: 24px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
}
.card {
  background: #fff;
  border-radius: 16px;
  padding: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}
.btn {
  display: inline-block;
  padding: 12px 16px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
}
.primary {
  background: #2f6bd8;
  color: #fff;
}
.ghost {
  background: #eaf0ff;
  color: #133c9a;
}
.crumbs {
  display: flex;
  gap: 8px;
  align-items: center;
  color: #2c5560;
  margin-bottom: 12px;
}
.slash {
  opacity: 0.5;
}
</style>
