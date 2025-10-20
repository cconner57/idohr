<script setup lang="ts">
import { ref, watch, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { goToDonate } from '../../utils/navigate'
import Button from '../ui/Button.vue'

const isScrolledDown = ref(false)
const router = useRouter()
const route = useRoute()

const handleScroll = () => {
  isScrolledDown.value = window.scrollY > 50
}

const add = () => window.addEventListener('scroll', handleScroll, { passive: true })
const remove = () => window.removeEventListener('scroll', handleScroll)

watch(
  () => route.path,
  (path, _prev, onCleanup) => {
    remove()

    if (['/about', '/volunteer'].includes(path)) {
      isScrolledDown.value = true
      return
    }

    isScrolledDown.value = window.scrollY > 50
    add()

    onCleanup(() => remove())
  },
  { immediate: true },
)

onUnmounted(remove)
</script>

<template>
  <nav :class="{ 'nav-blurred': isScrolledDown }">
    <section class="nav-links">
      <RouterLink to="/" class="nav-item" active-class="active"><p>Home</p></RouterLink>
      <RouterLink to="/about" class="nav-item" active-class="active"><p>About</p></RouterLink>
      <RouterLink to="/adopt" class="nav-item" active-class="active"><p>Adopt</p></RouterLink>
      <RouterLink to="/volunteer" class="nav-item" active-class="active"
        ><p>Volunteer</p></RouterLink
      >
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
  position: fixed;
  width: 100%;
  overflow: hidden;
  z-index: 100;
}

.nav-blurred {
  background-color: hsl(182, 100%, 23%, 0.75);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition:
    background-color 0.3s ease,
    backdrop-filter 0.3s ease;
}

.nav-links {
  display: flex;
  gap: 4rem;
  padding: 1rem 9.5rem;
}

.nav-item {
  color: var(--font-color-light);
  text-decoration: none;
  p {
    font-size: 1.2rem;
  }
}

.nav-item.active {
  font-weight: 600;
  border-bottom: 2px solid var(--font-color-light);
  padding-bottom: 4px;
  p {
    font-size: 1.2rem;
  }
  &:hover {
    cursor: pointer;
  }
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
