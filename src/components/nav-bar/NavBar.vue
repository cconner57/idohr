<script setup lang="ts">
import { useRouter } from 'vue-router'
import { goToDonate } from '../../utils/navigate'
import Button from '../ui/Button.vue'

const router = useRouter()
</script>

<template>
  <nav>
    <section class="nav-links">
      <RouterLink to="/" class="nav-item" active-class="active">
        <p>Home</p>
      </RouterLink>
      <RouterLink to="/about" class="nav-item" active-class="active">
        <p>About</p>
      </RouterLink>
      <RouterLink to="/adopt" class="nav-item" active-class="active">
        <p>Adopt</p>
      </RouterLink>
      <RouterLink to="/volunteer" class="nav-item" active-class="active">
        <p>Volunteer</p>
      </RouterLink>
    </section>
    <Button title="Donate" color="green" @click="goToDonate(router)" />
  </nav>
</template>

<style scoped lang="css">
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
}

.nav-links {
  display: flex;
  gap: 4rem;
  padding: 1rem;
}

.nav-item {
  color: var(--font-color-light);
  text-decoration: none;
  p {
    font-size: 1.2rem;
  }
}

.nav-item.active {
  border-bottom: 2px solid var(--yellow);
}

button {
  background-color: var(--green);
  height: 48px;
  min-width: 140px;
  padding: 8px 24px;
  font-size: 1.15rem;
  font-weight: 600;
  border-radius: 6px;
  align-self: center;
  margin: 8px 0;
  &:hover {
    cursor: pointer;
  }
}
</style>
