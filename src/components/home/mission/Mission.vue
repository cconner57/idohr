<script setup lang="ts"></script>

<template>
  <section class="mission">
    <h4>Our Mission</h4>
    <content>
      <p>
        I Dream of Home Rescue's (IDOHR) mission is to rescue abandoned, unwanted, and surrendered
        animals. While we search for loving homes, we give them what all animals deserve: shelter,
        food, veterinary care, and love. IDOHR will also advocate and educate on the importance of
        pet adoption, spaying, neutering, and proper pet care.
      </p>
      <img src="/images/watercolor.jpeg" alt="watercolor painting of dog and cat" height="300" />
    </content>
  </section>
</template>

<style scoped lang="css">
.mission {
  min-width: 80%;
  max-width: 80%;
  text-align: start;
  margin-bottom: 30px;

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
      font-weight: 400;
    }
  }

  @media (max-width: 440px) {
    padding: 0 1rem;

    & h4 {
      font-size: 2rem;
    }
    & content {
      flex-direction: column;
      align-items: center;
      & img {
        margin: 20px 0;
        width: 100%;
        height: auto;
        max-height: none;
      }
      & p {
        width: 100%;
        font-size: 1rem;
        margin-top: 10px;
        color: var(--font-color-medium);
        line-height: 1.6;
        font-weight: 400;
      }
    }
  }
}
</style>
