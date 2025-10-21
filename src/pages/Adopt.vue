<script setup lang="ts">
import type { IPet } from '../models/common'
import AdoptDetail from '../components/adopt-view/AdoptDetail.vue'
import AdoptSummary from '../components/adopt-view/AdoptSummary.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps<{ slug?: string }>()
const route = useRoute()

const slug = computed(() => props.slug ?? (route.params.slug as string | undefined))

const pets: IPet[] = [
  {
    slug: 'apricot',
    name: 'Apricot',
    physicalTraits: {
      species: 'Cat',
      breed: 'Domestic Short Hair',
      physicalDescription: 'Sweet, chatty lap buddy who loves feather wands.',
    },
  },
  {
    slug: 'montclair',
    name: 'Montclair',
    physicalTraits: {
      species: 'Cat',
      breed: 'Domestic Short Hair',
      physicalDescription: 'Curious guy; professional treat inspector.',
    },
  },
  {
    slug: 'crystal',
    name: 'Crystal',
    physicalTraits: {
      species: 'Cat',
      breed: 'Domestic Short Hair',
      physicalDescription: 'Quiet, gentle soul who enjoys windows and naps.',
    },
  },
  {
    slug: 'casper',
    name: 'Casper',
    physicalTraits: {
      species: 'Cat',
      breed: 'Domestic Short Hair',
      physicalDescription: 'Playful and social, loves wand toys and tunnels.',
    },
  },
  { slug: 'buddy', name: 'Buddy', physicalTraits: { species: 'Dog', breed: 'Mixed Breed' } },
  { slug: 'max', name: 'Max', physicalTraits: { species: 'Dog', breed: 'Mixed Breed' } },
  { slug: 'bella', name: 'Bella', physicalTraits: { species: 'Dog', breed: 'Mixed Breed' } },
  { slug: 'luna', name: 'Luna', physicalTraits: { species: 'Dog', breed: 'Mixed Breed' } },
  { slug: 'buddy-2', name: 'Buddy', physicalTraits: { species: 'Dog', breed: 'Mixed Breed' } },
  { slug: 'max-2', name: 'Max', physicalTraits: { species: 'Dog', breed: 'Mixed Breed' } },
  { slug: 'bella-2', name: 'Bella', physicalTraits: { species: 'Dog', breed: 'Mixed Breed' } },
  { slug: 'luna-2', name: 'Luna', physicalTraits: { species: 'Dog', breed: 'Mixed Breed' } },
]

// additional richer mock entries
pets.push(
  {
    slug: 'marmalade',
    name: 'Marmalade',
    physicalTraits: {
      species: 'Cat',
      breed: 'Orange Tabby',
      age: '2 years',
      size: 'Small',
      color: 'Orange/White',
      physicalDescription: 'Affectionate lap cat who likes sunbeams and slow play.',
    },
    behavioralTraits: {
      goodWithKids: true,
      goodWithDogs: false,
      energyLevel: 'Low',
      temperament: 'Calm',
      houseTrained: true,
    },
    medicalHistory: {
      vaccinationsUpToDate: true,
      spayedOrNeutered: true,
      microchipped: true,
    },
    adoptionFee: 75,
  },
  {
    slug: 'sable',
    name: 'Sable',
    physicalTraits: {
      species: 'Dog',
      breed: 'German Shepherd',
      age: '3 years',
      size: 'Large',
      color: 'Black/Tan',
      physicalDescription: 'Loyal, smart, and energetic; ideal for an active family.',
    },
    behavioralTraits: {
      goodWithKids: true,
      goodWithDogs: true,
      energyLevel: 'High',
      temperament: 'Alert and friendly',
      houseTrained: true,
    },
    medicalHistory: {
      vaccinationsUpToDate: true,
      spayedOrNeutered: true,
      microchipped: true,
    },
    adoptionFee: 150,
  },
  {
    slug: 'pearl',
    name: 'Pearl',
    physicalTraits: {
      species: 'Cat',
      breed: 'Siamese',
      age: '1 year',
      size: 'Small',
      color: 'Cream/Seal Point',
      physicalDescription: 'Vocal, affectionate, and playful; enjoys puzzle feeders.',
    },
    behavioralTraits: {
      goodWithKids: true,
      goodWithCats: true,
      energyLevel: 'Medium',
      temperament: 'Playful',
      houseTrained: true,
    },
    medicalHistory: {
      vaccinationsUpToDate: true,
      spayedOrNeutered: false,
      microchipped: false,
    },
    adoptionFee: 100,
  },
  {
    slug: 'nugget',
    name: 'Nugget',
    physicalTraits: {
      species: 'Dog',
      breed: 'Beagle',
      age: '4 years',
      size: 'Medium',
      color: 'Tricolor',
      physicalDescription: 'Curious and playful; loves walks and scent games.',
    },
    behavioralTraits: {
      goodWithKids: true,
      goodWithDogs: true,
      energyLevel: 'High',
      temperament: 'Friendly',
      houseTrained: true,
    },
    medicalHistory: {
      vaccinationsUpToDate: true,
      spayedOrNeutered: true,
      microchipped: true,
      medicalDescription: 'Allergies to certain flea medications.',
    },
    adoptionFee: 125,
  },
  {
    slug: 'willow',
    name: 'Willow',
    physicalTraits: {
      species: 'Cat',
      breed: 'Domestic Long Hair',
      age: '6 months',
      size: 'Small',
      color: 'Gray',
      physicalDescription: 'Young and energetic; still learning litterbox habits.',
    },
    behavioralTraits: {
      goodWithKids: true,
      goodWithCats: true,
      energyLevel: 'High',
      temperament: 'Curious',
      houseTrained: false,
    },
    medicalHistory: {
      vaccinationsUpToDate: false,
      spayedOrNeutered: false,
      microchipped: false,
    },
    adoptionFee: 50,
  },
)

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
