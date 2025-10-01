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
    <h1>Rescue. Love. Adopt.</h1>
    <Button color="blue" title="Adopt Now" @click="handleAdopt" size="large" />
  </section>
  <main :style="{ backgroundColor: 'var(--background)', paddingBottom: '220px' }">
    <section class="adoption-spotlight">
      <h4>Adoption Spotlight</h4>
      <div class="pet-list">
        <PetItem name="Crystal" />
        <PetItem name="Montclair" />
        <PetItem name="Apricot" />
        <PetItem name="Casper" />
      </div>
    </section>
    <section class="mission">
      <h4>Our Mission</h4>
      <content>
        <p>
          I Dream of Home Rescue's (IDOHR) mission is to rescue abandoned, unwanted, and surrendered
          animals. While we search for loving homes, we give them what all animals deserve: shelter,
          food, veterinary care, and love. IDOHR will also advocate and educate on the importance of
          pet adoption, spaying, neutering, and proper pet care.
        </p>
        <img src="/images/watercolor.avif" alt="watercolor painting of dog and cat" height="300" />
      </content>
    </section>
  </main>
  <main :style="{ backgroundColor: 'var(--white)' }">
    <section class="impact">
      <h4>Our Impact</h4>
      <content>
        <div class="awards">
          <span class="gold-border">
            <p>Gold Transparency</p>
            <p>2024</p>
            <p>Candid.</p>
          </span>
          <span class="gold-border">
            <p>Gold Transparency</p>
            <p>2023</p>
            <p>Candid.</p>
          </span>
          <span class="silver-border">
            <p>Silver Transparency</p>
            <p>2022</p>
            <p>Candid.</p>
          </span>
        </div>
        <div class="divider"></div>
        <div class="stats">
          <span>
            <h5>500+</h5>
            <p>pets rescued since 2020</p>
          </span>
          <span>
            <h5>500+</h5>
            <p>pets rescued since 2020</p>
          </span>
        </div>
      </content>
    </section>
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
  }
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
}

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
}

.mission {
  min-width: 80%;
  max-width: 80%;
  text-align: start;
  margin-bottom: 30px;
  overflow: hidden;

  & h4 {
    font-size: 2.75rem;
    color: var(--font-color-light);
  }
  & content {
    display: flex;
    justify-content: space-between;
    & img {
      border-radius: 16px;
      height: auto;
      max-height: 300px;
      object-fit: cover;
      width: 350px;
      margin-right: 200px;
    }
    & p {
      width: 650px;
      font-size: 1.2rem;
      color: var(--font-color-medium);
      line-height: 1.6;
      margin-top: 20px;
    }
  }
}

.impact {
  min-width: 80%;
  max-width: 80%;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px 50px 50px 50px;
  border-radius: 12px;
  overflow: hidden;
  margin-top: -150px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.25);

  & h4 {
    font-size: 2rem;
    color: var(--font-color-dark);
    margin-left: -15px;
  }
  & content {
    display: flex;
    align-items: center;
    width: 100%;
    color: var(--font-color-dark);
  }
  & .awards {
    display: flex;
    gap: 50px;
    width: 50%;
    & span {
      display: flex;
      flex-direction: column;
      gap: 4px;
      padding: 8px;
    }
    & p {
      font-size: 1.05rem;
    }
    & p:not(:first-child) {
      font-weight: 600;
    }
    & p:last-child {
      margin-top: 24px;
    }
  }
  .divider {
    border-left: 5px solid gray;
    height: 150px;
    border-radius: 12px;
    margin: 0 90px 0 80px;
  }
  .stats {
    display: flex;
    gap: 100px;
    width: 45%;
    & span {
      display: flex;
      flex-direction: column;
      gap: 8px;
      & h5 {
        font-size: 3rem;
        color: var(--font-color-dark);
      }
      & p {
        font-size: 1.25rem;
        color: var(--font-color-dark);
      }
    }
  }
}

.call-to-action {
  display: flex;
  justify-content: space-around;
  margin: 20px 0 80px;
  min-width: 80%;
  max-width: 80%;
  padding: 0 60px;
}

.gold-border {
  box-shadow:
    0 0 0 5px gold,
    0 0 0 8px white,
    0 0 0 14px gold;
}

.silver-border {
  box-shadow:
    0 0 0 5px silver,
    0 0 0 8px white,
    0 0 0 14px silver;
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
