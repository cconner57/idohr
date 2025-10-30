<script setup lang="ts">
import { useRouter } from 'vue-router'
import BannerButton from '../components/common/ui/BannerButton.vue'

import Footer from '../components/common/footer/Footer.vue'
import AdoptionSpotlight from '../components/home/spotlight/AdoptionSpotlight.vue'
import HeroSection from '../components/home/hero-section/HeroSection.vue'
import Mission from '../components/home/mission/Mission.vue'
import Impact from '../components/home/impact/Impact.vue'

const router = useRouter()

const isMobile = window.innerWidth <= 440
</script>

<template>
  <HeroSection />
  <main
    :style="{
      backgroundColor: 'var(--background)',
      paddingBottom: isMobile ? '60px' : '220px',
      marginTop: isMobile ? '0' : '-100px',
      height: isMobile ? 'auto' : '600px',
    }"
  >
    <AdoptionSpotlight />
    <Mission />
  </main>
  <main
    :style="{
      backgroundColor: 'var(--white)',
      marginTop: isMobile ? '0' : '-150px',
      paddingTop: isMobile ? '40px' : '150px',
      paddingBottom: isMobile ? '0px' : '220px',
      height: isMobile ? 'auto' : '600px',
    }"
  >
    <Impact />
    <section class="call-to-action">
      <BannerButton
        imgSrc="/images/paw.svg"
        title="Adopt a Pet"
        subtitle="Find your perfect companion"
        color="blue"
        @click="() => router.push('/adopt')"
      />
      <BannerButton
        imgSrc="/images/hand.svg"
        title="Get Involved"
        subtitle="Volunteer, foster, or support us"
        color="purple"
        @click="() => router.push('/volunteer')"
      />
      <BannerButton
        imgSrc="/images/heart.svg"
        title="Donate"
        subtitle="Help us save more lives"
        color="green"
        @click="() => router.push('/donate')"
      />
    </section>
  </main>

  <Footer />
</template>

<style scoped lang="css">
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;

  @media (max-width: 440px) {
    padding: 0 1rem;
    gap: 40px;
  }
}

.call-to-action {
  display: flex;
  justify-content: space-around;
  margin: 20px 0 80px;

  padding: 0 60px;
  @media (max-width: 440px) {
    flex-direction: column;
    gap: 20px;
    margin: 10px 0 40px;
  }
}

.adopt-now-button {
  background-color: var(--green);
  height: 48px;
  min-width: 160px;
  padding: 0 24px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 6px;
}
</style>
