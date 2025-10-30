<script setup lang="ts">
import { ref, watch, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { goToDonate } from '../../../utils/navigate'
import Button from '../ui/Button.vue'
import NavDrawer from './NavDrawer.vue'
import { useIsMobile } from '../../../utils/useIsMobile'

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

    if (!['/'].includes(path)) {
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

const menuOpen = ref(false)

watch(
  () => route.fullPath,
  () => {
    menuOpen.value = false
  },
)

const isMobile = useIsMobile()
</script>

<template>
  <nav v-if="isMobile" :class="{ 'nav-blurred': isScrolledDown }">
    <div class="nav-logo">
      <RouterLink to="/" class="nav-item">
        <img src="/images/idohr-logo.jpg" alt="" />
        <h1>I Dream of Home Rescue</h1>
      </RouterLink>
    </div>
    <NavDrawer v-model="menuOpen" :size="28" style="color: #fff" />
  </nav>
  <nav v-else :class="{ 'nav-blurred': isScrolledDown }">
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
  justify-content: center;
  align-items: center;
  padding: 1rem 9.75rem;
  gap: 47.5rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  align-self: center;
  transition: background-color 0.3s ease;

  @media (max-width: 440px) {
    margin: 0;
    padding: calc(1rem + var(--safe-top)) 1rem 1rem 1rem;
    gap: 0.5rem;
    width: 100dvw;
    justify-content: space-between;

    .nav-logo {
      a {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        img {
          height: 40px;
          width: auto;
          border-radius: 8px;
        }

        h1 {
          font-size: 1.2rem;
          color: var(--font-color-light);
        }
      }
    }
  }
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
