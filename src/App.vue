<script setup lang="ts">
import NavBar from './components/nav-bar/NavBar.vue'
import '../src/styles/base.css'
import BannerButton from './components/ui/BannerButton.vue'
</script>

<template>
  <NavBar />
  <h1>Rescue. Love. Adopt.</h1>
  <section>
    <button>Adopt Now</button>
    <h5>Adoptable Pets</h5>
  </section>
  <section>
    <div>
      <p>Bella</p>
      <button>Adopt Me</button>
    </div>
    <div>
      <p>Bella</p>
      <button>Adopt Me</button>
    </div>
    <div>
      <p>Bella</p>
      <button>Adopt Me</button>
    </div>
    <div>
      <p>Bella</p>
      <button>Adopt Me</button>
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
  <section style="display: flex; gap: 16px">
    <BannerButton
      imgSrc=""
      title="Adopt a Pet"
      subtitle="Find your perfect companion"
      color="yellow"
    />
    <BannerButton
      imgSrc=""
      title="Get Involved"
      subtitle="Volunteer, foster, or support us"
      color="green"
    />
    <BannerButton imgSrc="" title="Donate" subtitle="Help us save more lives" color="red" />
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

<style scoped></style>
