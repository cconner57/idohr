<script setup lang="ts">
import { useRouter } from 'vue-router'
import { goToAdopt } from '../../../utils/navigate'
import Button from '../../common/ui/Button.vue'

const router = useRouter()

function handleAdopt() {
  goToAdopt(router)
}
</script>

<template>
  <section class="hero-section">
    <h1>Rescue. Love. Adopt.</h1>
    <Button color="blue" title="Adopt Now" @click="handleAdopt" size="large" />
  </section>
</template>

<style scoped lang="css">
.hero-section {
  box-sizing: border-box;
  inline-size: 100%;
  min-height: 600px;
  background: url('/images/hero.png') 50% 30% / cover no-repeat;
  padding: 100px clamp(16px, 10dvw, 140px) 40px;
  overflow: hidden;

  & h1 {
    font-size: 6rem;
    color: var(--white);
    max-width: 600px;
    margin-bottom: 24px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    line-height: 100px;
    user-select: none;
  }

  @media (max-width: 440px) {
    padding: 8rem 2.85rem 2rem;
    min-height: 400px;
    background-position: 50% 20%;

    & h1 {
      font-size: 2.5rem;
      line-height: 3rem;
      width: 300px;
      max-width: 100%;
      margin-bottom: 16px;
    }
  }
}
</style>
