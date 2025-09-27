<script setup lang="ts">
import { useRouter } from 'vue-router'
import PetItem from '../components/pet-item/PetItem.vue'
import BannerButton from '../components/ui/BannerButton.vue'
import Button from '../components/ui/Button.vue'
import { goToAdopt } from '../utils/navigate'

const router = useRouter()

function handleAdopt() {
  goToAdopt(router)
}
</script>

<template>
  <section class="hero-section">
    <h1 style="font-size: 48px">Rescue. Love. Adopt.</h1>
    <Button color="blue" title="Adopt Now" @click="handleAdopt" />
  </section>
  <section style="display: flex; flex-direction: column; gap: 16px">
    <h5>Adoption Spotlight</h5>
    <div style="display: flex; gap: 3rem; flex-wrap: wrap; justify-content: center">
      <PetItem name="Crystal" />
      <PetItem name="Montclair" />
      <PetItem name="Apricot" />
      <PetItem name="Flare" />
    </div>
  </section>
  <section>
    <h5>Our Mission</h5>
    <p>
      I Dream of Home Rescue's (IDOHR) mission is to rescue abandoned, unwanted, and surrendered
      animals. While we search for loving homes, we give them what all animals deserve: shelter,
      food, veterinary care, and love. IDOHR will also advocate and educate on the importance of pet
      adoption, spaying, neutering, and proper pet care.
    </p>
  </section>
  <section>
    <h5>Our Impact</h5>
    <div>
      <p>Gold Transparency 2024 - Candid</p>
      <p>Gold Transparency 2023 - Candid</p>
      <p>Silver Transparency 2022 - Candid</p>
    </div>
    <p>500+ pets rescued since 2020</p>
  </section>
  <section style="display: flex; gap: 32px; justify-content: center">
    <BannerButton
      imgSrc="https://placehold.co/32x32"
      title="Adopt a Pet"
      subtitle="Find your perfect companion"
      color="blue"
      @click="() => router.push('/adopt')"
    />
    <BannerButton
      imgSrc="https://placehold.co/32x32"
      title="Get Involved"
      subtitle="Volunteer, foster, or support us"
      color="purple"
      @click="() => router.push('/volunteer')"
    />
    <BannerButton
      imgSrc="https://placehold.co/32x32"
      title="Donate"
      subtitle="Help us save more lives"
      color="green"
      @click="() => router.push('/donate')"
    />
  </section>
  <footer>
    <div>
      <p>Connect with us:</p>
      <p>Facebook | Instagram</p>
    </div>
    <div>
      <p>
        I Dream of Home Rescue, Inc. is a 501(c)(3) NON-PROFIT ORGANIZATION. TAX ID: 81-0780050 I
        Dream of Home Rescue PO Box 7612, La Verne, California 91750
      </p>
    </div>
  </footer>
</template>

<style scoped lang="css">
.hero-section {
  min-height: 600px;
  width: 100%;
  background-image: url('https://placehold.co/1440x600');
  background-size: cover;
  background-position: center;
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
