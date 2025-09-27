<script setup lang="ts">
import NavBar from './components/nav-bar/NavBar.vue'
import '../src/styles/base.css'
</script>

<template>
  <NavBar />
  <main>
    <RouterView />
  </main>
</template>

<style scoped></style>
