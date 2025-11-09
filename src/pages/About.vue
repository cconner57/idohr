<script setup lang="ts">
import SurrenderCat from '../components/about/surrender/SurrenderCat.vue'
import Candid from '../components/common/candid-award/Candid.vue'
</script>

<template>
  <main class="about">
    <section class="hero">
      <h1>About IDOHR</h1>
      <p class="lead">
        I Dream of Home Rescue (IDOHR) is a volunteer-powered nonprofit helping homeless cats and
        dogs heal, thrive, and find loving homes across Southern California.
      </p>
    </section>

    <section class="story">
      <img src="/images/watercolor.jpeg" alt="IDOHR watercolor inspiration" />
      <div>
        <h2>Our Story</h2>
        <p>
          IDOHR began with a simple dream: to give every abandoned, neglected, and unwanted animal a
          safe place to call home. What started as a small circle of fosters has grown into a
          community of adopters, volunteers, and supporters who believe compassion changes
          lives—both animal and human.
        </p>
      </div>
    </section>

    <section class="mission">
      <div>
        <h2 class="text-on-teal">Our Mission</h2>
        <p class="text-on-teal">
          We rescue, rehabilitate, and rehome animals in need—one tail, one paw, one heart at a
          time. Every animal receives medical care, a safe foster home, love-based socialization,
          and a path to a forever family.
        </p>
        <ul class="ticks text-on-teal">
          <li>Vaccinations, microchipping, and spay/neuter</li>
          <li>Medical treatment and behavioral support</li>
          <li>Adopter education and lifetime support</li>
        </ul>
      </div>
      <img src="/images/montclair.jpeg" alt="Happy adopted dog and cat" />
    </section>

    <section class="transparency">
      <div class="awards">
        <Candid type="Gold" year="2024" />
        <Candid type="Gold" year="2023" />
        <Candid type="Silver" year="2022" />
      </div>
      <div class="notice">
        <h2>Transparency</h2>
        <p>
          IDOHR is a 501(c)(3) nonprofit. Donations are tax-deductible as allowed by law. We publish
          annual updates and operate with financial transparency.
        </p>
        <p class="small">EIN: 81-0780050 • PO Box 7612, La Verne, CA 91750</p>
      </div>
    </section>
  </main>
  <SurrenderCat />
</template>

<style scoped lang="css">
.about {
  width: 100%;
  overflow: hidden;
  color: var(--font-color-dark);
}

.hero {
  padding: 150px 180px 50px;
  color: var(--font-color-light);
  background-color: var(--green);
  h1 {
    font-size: 2.5rem;
  }
  p {
    font-size: 1.25rem;
    max-width: 600px;
    margin-top: 12px;
  }
  @media (max-width: 440px) {
    padding: 100px 30px 50px;
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1.15rem;
    }
  }
}

.story,
.mission {
  display: flex;
  justify-content: space-between;
  gap: 8rem;
  & h2 {
    font-size: 2.5rem;
  }
}

.story {
  display: grid;
  grid-template-columns: 50% 50%;
  background-color: var(--white);
  padding: 50px 180px 50px;
  p {
    font-size: 1.15rem;
    max-width: 600px;
    margin-top: 12px;
  }
  @media (max-width: 440px) {
    padding: 50px 30px 50px;
    grid-template-columns: 100%;
    gap: 30px;
  }
}

.mission {
  display: grid;
  grid-template-columns: 50% 50%;
  background-color: var(--green);
  color: var(--font-color-light);
  padding: 50px 180px 50px;
  p {
    font-size: 1.15rem;
    max-width: 600px;
    margin-top: 12px;
  }

  > div,
  > img {
    width: 100%;
    box-sizing: border-box;
  }

  & .ticks {
    list-style: none;
    padding: 0;
    margin: 12px 0 0;
  }
  & .ticks li {
    position: relative;
    padding-left: 24px;
    margin: 6px 0;
  }
  & .ticks li::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: #bbf7d0;
    font-weight: 700;
  }
  @media (max-width: 440px) {
    padding: 50px 30px 50px;
    grid-template-columns: 100%;
    gap: 30px;
  }
}

img {
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.25);
}

.transparency {
  display: grid;
  grid-template-columns: 50% 50%;
  padding: 50px 180px 50px;
  color: var(--font-color-dark);
  background-color: var(--white);
  p {
    font-size: 1.15rem;
    max-width: 600px;
    margin-top: 12px;
  }
  .notice {
    margin-left: 8rem;
    & h2 {
      font-size: 2.5rem;
    }
    .small {
      font-size: 0.85rem;
      color: var(--font-color-medium);
      margin-top: 12px;
    }
  }
  .awards {
    display: flex;
    gap: 3rem;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 440px) {
    padding: 50px 30px 50px;
    grid-template-columns: 100%;
    gap: 30px;
    .notice {
      margin-left: 0;
    }
    & .awards {
      flex-direction: column;
      justify-content: center;
      margin-top: 1.5rem;
    }
  }
}
</style>
