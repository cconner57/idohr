<script setup lang="ts"></script>

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
    </section>
    <button>Donate</button>
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
  background-color: var(--yellow);
  color: var(--font-color-dark);
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
}
</style>
