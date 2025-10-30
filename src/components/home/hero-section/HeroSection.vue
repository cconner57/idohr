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
  min-height: 600px;
  width: 100%;
  background-image: url('/images/hero.png');
  background-size: cover;
  background-position: 50% 30%;
  padding: 100px 180px 40px;
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
    padding: 7rem 3rem 2rem;
    min-height: 400px;
    background-position: 50% 20%;

    & h1 {
      font-size: 3rem;
      line-height: 3.5rem;
      max-width: 100%;
      margin-bottom: 16px;
    }
  }
}
</style>
